/////////////////////////////////////////////////////////////////////////
///// IMPORT
import './main.css'
import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/////////////////////////////////////////////////////////////////////////
//// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const dracoLoader = new DRACOLoader()
const loader = new GLTFLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'js' })
loader.setDRACOLoader(dracoLoader)

/////////////////////////////////////////////////////////////////////////
///// DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE
const container = document.getElementById( 'canvas' );
document.body.appendChild(container)

/////////////////////////////////////////////////////////////////////////
///// SCENE CREATION
const scene = new THREE.Scene()
scene.background = null// new THREE.Color('white')
//scene.background.transparent = true
/////////////////////////////////////////////////////////////////////////
///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true}) // turn on antialias
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight) // make it full screen
renderer.outputEncoding = THREE.sRGBEncoding // set color encoding
container.appendChild(renderer.domElement) // add the renderer to html div

/////////////////////////////////////////////////////////////////////////
///// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100)
camera.position.set(34,16,20)
scene.add(camera)

/////////////////////////////////////////////////////////////////////////
///// MAKE EXPERIENCE FULL SCREEN
window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
    renderer.setPixelRatio(2)
})

/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

/////////////////////////////////////////////////////////////////////////
///// SCENE LIGHTS
const ambient = new THREE.AmbientLight(0xa0a0fc, 0.82)
scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
sunLight.position.set(-69,44,14)
scene.add(sunLight)

/////////////////////////////////////////////////////////////////////////
///// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load('models/gltf/bff.glb', function (gltf) {

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
let uniforms = { mousePos: {value: new THREE.Vector3()}}
let pointsGeometry = new THREE.BufferGeometry()
const cursor = {x:0, y:0}
const vertices = []
const tempPosition = new THREE.Vector3()

function transformMesh(){
    // Loop to sample a coordinate for each points
    for (let i = 0; i < 120000; i ++) {
        // Sample a random position in the model
        sampler.sample(tempPosition)
        // Push the coordinates of the sampled coordinates into the array
        vertices.push(tempPosition.x, tempPosition.y, tempPosition.z)
    }
    
    // Define all points positions from the previously created array
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    // Define the matrial of the points
    const pointsMaterial = new THREE.PointsMaterial({
        color:'#1e337a',
        size: 0.02,
        //blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.98,
        depthWrite: false,
        sizeAttenuation: true,
        alphaMap: new THREE.TextureLoader().load('particle-texture.jpg'),
        
    })

    // Create the custom vertex shader injection
    pointsMaterial.onBeforeCompile = function(shader) {
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
    controls.enabled = false //disable orbit controls to animate the camera
    
    new TWEEN.Tween(camera.position.set(10, -30, 10)).to({ // from camera position
        x: 0.4, //desired x position to go
        y: -0.8, //desired y position to go
        z: 4 //desired z position to go
    }, 500) // time take to animate
    .delay(1000).easing(TWEEN.Easing.Quartic.InOut).start() // define delay, easing
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
function setOrbitControlsLimits(){
    controls.enableDamping = true
    controls.dampingFactor = 0.4
    controls.minDistance = 0
    controls.maxDistance = 90
    controls.enableRotate = true
    controls.enableZoom = false
    controls.zoomSpeed = 0.5
    controls.autoRotate = true
    
}

function onMouseWheel(event){

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

document.addEventListener('mousemove', (event) => {
    event.preventDefault();

    // Set the target cursor position
    targetCursor.x = (event.clientX / window.innerWidth) - 0.5;
    targetCursor.y = event.clientY / window.innerHeight - 0.5;

    lastMouseMoveTime = Date.now();
}, false);

(async () => {
    tsParticles.load("tsparticles", {
        fps_limit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
          }
        },
        particles: {
          color: { value: "#f07" },
          line_linked: {
            color: "#f07",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          }
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        retina_detect: true
      });
      
  })();