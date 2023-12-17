/////////////////////////////////////////////////////////////////////////
///// IMPORT
import './main.css'
import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import WebPage from './react-components'
import { createRoot } from 'react-dom/client'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { setPointsBackground } from './utils-canvas'

/////////////////////////////////////////////////////////////////////////
//// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const dracoLoader = new DRACOLoader()
const loader = new GLTFLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'js' })
loader.setDRACOLoader(dracoLoader)

/////////////////////////////////////////////////////////////////////////
///// DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE
const container = document.getElementById('canvas');
document.body.appendChild(container)

/////////////////////////////////////////////////////////////////////////
///// SCENE CREATION
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xEDECEC)
//scene.background.transparent = true
/////////////////////////////////////////////////////////////////////////
///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }) // turn on antialias
renderer.setPixelRatio(Math.min(window.devicePixelRatio * 0.5,0.75)) // retina display
renderer.setSize(Math.max(window.innerWidth * 1.5, 500), Math.max(window.innerHeight * 1.5, 500 * 2)) // set size
renderer.outputEncoding = THREE.sRGBEncoding // set color encoding
container.appendChild(renderer.domElement) // add the renderer to html div

/////////////////////////////////////////////////////////////////////////
///// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000)
//camera.position.set(34,16,20)
scene.add(camera)

/////////////////////////////////////////////////////////////////////////
///// MAKE EXPERIENCE FULL SCREEN
window.addEventListener('resize', () => {
  const width = window.innerWidth
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth * 1.5, Math.max(window.innerHeight * 1.5, 500 * 2))
  renderer.setPixelRatio(window.devicePixelRatio * 0.5)
})

/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

/////////////////////////////////////////////////////////////////////////
///// SCENE LIGHTS

//const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
//sunLight.position.set(-69,44,14)
//scene.add(sunLight)

/////////////////////////////////////////////////////////////////////////
///// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load('models/gltf/brain_rp.glb', function (gltf) {

  gltf.scene.traverse((obj) => {
    if (obj.isMesh) {
      sampler = new MeshSurfaceSampler(obj).build()
    }
  })

  transformMesh()
})


/////////////////////////////////////////////////////////////////////////
///// TRANSFORM MESH INTO POINTS
let sampler
let uniforms = { mousePos: { value: new THREE.Vector3() } }
let pointsGeometry = new THREE.BufferGeometry()
const cursor = { x: 0, y: 0 }
const vertices = []
const tempPosition = new THREE.Vector3()

let numberOfPoints = 50000;
let pointSize = 0.004;
// for mobile
if (window.innerWidth < 600) {
  numberOfPoints = 10000;
  pointSize = 0.01;
}

function transformMesh() {
  // Loop to sample a coordinate for each points
  for (let i = 0; i < numberOfPoints; i++) {
    // Sample a random position in the model
    sampler.sample(tempPosition)
    // Push the coordinates of the sampled coordinates into the array
    vertices.push(tempPosition.x, tempPosition.y - 0.5, tempPosition.z)
  }

  // Define all points positions from the previously created array
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  // Define the matrial of the points
  const pointsMaterial = new THREE.PointsMaterial({
    color: '#FF5733',
    size: pointSize,
    //blending: THREE.AdditiveBlending,
    transparent: false,
    opacity: 1,
    depthWrite: false,
    //alphaMap: new THREE.TextureLoader().load('particle-texture.jpg'),

  })

  // Create the custom vertex shader injection
  pointsMaterial.onBeforeCompile = function (shader) {
    shader.uniforms.mousePos = uniforms.mousePos

    shader.vertexShader = `
          uniform vec3 mousePos;
          varying float vNormal;
          
          ${shader.vertexShader}`.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>   
            vec3 seg = position - mousePos;
            vec3 dir = normalize(seg);
            float dist = length(seg);
            if (dist < 10.5){
              float force = clamp(1.0 / (dist * dist * 0.3), -0.8, .3);
              transformed += dir * force;
              vNormal = force /0.9;
            }
          `
    )
  }

  // Create an instance of points based on the geometry & material
  const points = new THREE.Points(pointsGeometry, pointsMaterial)

  // Add them into the main group
  scene.add(points)

}


/////////////////////////////////////////////////////////////////////////
//// INTRO CAMERA ANIMATION USING TWEEN
function introAnimation() {


  new TWEEN.Tween(camera.position.set(0.1, 0.1, -0.1)).to({ // from camera position
    x: 1.7, //desired x position to go
    y: -0.03, //desired y position to go
    z: 0.01 //desired z position to go
  }, 4500) // time take to animate
    .delay(100).easing(TWEEN.Easing.Quartic.InOut).start() // define delay, easing
    .onComplete(function () { //on finish animation
      controls.enabled = true //enable orbit controls
      setOrbitControlsLimits() //enable controls limits
      //controls.camera.rotate.set(0,0,0) //reset camera rotation
      TWEEN.remove(this) // remove the animation from memory
    })

}

introAnimation() // call intro animation on start

/////////////////////////////////////////////////////////////////////////
//// DEFINE ORBIT CONTROLS LIMITS
function setOrbitControlsLimits() {
  controls.enableDamping = true
  controls.dampingFactor = 0.4

  controls.enableRotate = true
  controls.enableZoom = false
  controls.zoomSpeed = 0.5
  controls.autoRotate = true


}

function onMouseWheel(event) {

}

/////////////////////////////////////////////////////////////////////////
//// RENDER LOOP FUNCTION
let lastMouseMoveTime = Date.now();
const idleThreshold = 300; // Time in milliseconds after which the mouse is considered idle
const decayRate = 0.99 // Rate at which the cursor position decays
const minMovementThreshold = 0.001; // Minimum threshold for cursor movement
//const cursor = { x: 0, y: 0 };
const targetCursor = { x: 0, y: 0 }; // Target position for the cursor
const lerpFactor = 0.1; // Factor for linear interpolation

function renderLoop() {
  TWEEN.update();
  controls.update();
  renderer.render(scene, camera);

  

  const currentTime = Date.now();
  if (currentTime - lastMouseMoveTime > idleThreshold) {
    // Gradually move cursor values towards 0
    if (Math.abs(cursor.x) > minMovementThreshold || Math.abs(cursor.y) > minMovementThreshold) {
      cursor.x *= decayRate;
      cursor.y *= decayRate;
    }
  } else {
    // Interpolate towards the target cursor position when mouse is moving
    cursor.x += (targetCursor.x - cursor.x) * lerpFactor;
    cursor.y += (targetCursor.y - cursor.y) * lerpFactor;
  }


  // Update uniforms with the new cursor position
  uniforms.mousePos.value.set(cursor.x, cursor.y, 0);


  requestAnimationFrame(renderLoop);
}

renderLoop();

// check resize screen and update accordingly
window.addEventListener('resize', (event) => {
  event.preventDefault();
  console.log(window.innerWidth, window.innerHeight);

}, false);

document.addEventListener('mousemove', (event) => {
  event.preventDefault();

  // Set the target cursor position
  targetCursor.x = (event.clientX / window.innerWidth) - 0.5;
  targetCursor.y = event.clientY / window.innerHeight - 0.5;

  lastMouseMoveTime = Date.now();
}, false);



console.log("Pixel Ratio: " + window.devicePixelRatio);

export function initRenderer(objPath, divId, details = 10, cameraPosition = [220,100,0], isMobile = false) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xF2F2F2);
  const aspectRatio = Math.max(window.innerWidth * 0.35, 279) / Math.max(window.innerHeight * 0.35, 279);
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.0001, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(Math.max(window.innerWidth * 0.35, 279), Math.max(window.innerHeight * 0.35, 279));
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Adjusted for mobile

  try {
    document.getElementById(divId).appendChild(renderer.domElement);
  } catch (error) {
    console.error(error);
    return;
  }

  camera.position.set(cameraPosition[2], cameraPosition[1], cameraPosition[0]);
  const controls = new OrbitControls(camera, renderer.domElement);
  const group = new THREE.Group();
  scene.add(group);

  let sampler = null;
  let paths = [];

  new OBJLoader().load(
    objPath,
    (obj) => {
      sampler = new MeshSurfaceSampler(obj.children[0]).build();
      for (let i = 0; i < 10; i++) {
        const path = new Path(i);
        paths.push(path);
        group.add(path.line);
      }
      renderer.setAnimationLoop(render);
    },
    (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
    (err) => console.error(err)
  );

  let maxNumPoints = 5000;
  
  if (isMobile) {
    maxNumPoints = 1000;
    details = details * 2;
  }
  
  const tempPosition = new THREE.Vector3();
  const materials = [
      new THREE.LineBasicMaterial({color: 0xFAAD80, transparent: false, opacity: 0.5}),
      new THREE.LineBasicMaterial({color: 0xFF6767, transparent: false, opacity: 0.5}),
      new THREE.LineBasicMaterial({color: 0xFF3D68, transparent: false, opacity: 0.5}),
      new THREE.LineBasicMaterial({color: 0xA73489, transparent: false, opacity: 0.5})
  ];

  class Path {
      constructor(index) {
          this.geometry = new THREE.BufferGeometry();
          this.material = materials[index % 4];
          this.line = new THREE.Line(this.geometry, this.material);
          this.vertices = [];
          
          sampler.sample(tempPosition);
          this.previousPoint = tempPosition.clone();
      }
      update() {
          let pointFound = false;
          while (!pointFound) {
              sampler.sample(tempPosition);
              if (tempPosition.distanceTo(this.previousPoint) < details) {
                  this.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
                  this.previousPoint = tempPosition.clone();
                  pointFound = true;
              }
          }
          this.geometry.setAttribute("position", new THREE.Float32BufferAttribute(this.vertices, 3));
      }
  }

    
  function render() {
    renderer.render(scene, camera);
      group.rotation.y += 0.002;

      paths.forEach(path => {
          if (path.vertices.length < maxNumPoints) {
              path.update();
              
          }
      });

      controls.update();
      
      
      
  }


  function onWindowResize() {
    camera.aspect = Math.max(window.innerWidth * 0.35, 279) / Math.max(window.innerHeight * 0.35, 279);
    camera.updateProjectionMatrix();
    renderer.setSize(Math.max(window.innerWidth * 0.35, 279), Math.max(window.innerHeight * 0.35, 279));
  }

  window.addEventListener("resize", onWindowResize, false);
}











const rootElement = document.getElementById("react-root");


// for the header to hidden and show on scroll
let lastScrollTop = 0;
let hideTimeout, showTimeout;

rootElement.addEventListener("scroll", function () {
  var header = document.querySelector('.header');
  var currentScroll = rootElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    clearTimeout(hideTimeout);
    clearTimeout(showTimeout);
    header.classList.add('header-hiding');
    hideTimeout = setTimeout(() => {
      header.classList.add('header-hidden');
    }, 300); // Starts hiding for 0.3 seconds

    showTimeout = setTimeout(() => {
      header.classList.remove('header-hiding');
      header.classList.remove('header-hidden');
    }, 800); // Delay before starting the reappearance
  } else {
    // Scrolling up
    clearTimeout(hideTimeout);
    header.classList.remove('header-hiding');
    header.classList.remove('header-hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

const root = createRoot(rootElement);

root.render(<WebPage />, rootElement);

