export function setPointsBackground(numberOfPoints, isMobile = true) {
  if (isMobile) {
    return;
  }

  //console.log('calling')

  // select this element
  // #tsparticles canvas {
  //   z-index: -10 !important;
  //   transition: all 0.5s ease-in-out;
  // }
  let element = null;
  try {
    element = document.getElementById('tsparticles');
    element.style.opacity = 0;
  } catch (error) {
    console.error('Element with ID "tsparticles" not found.');
    console.error(error);
    return;
  }

  setTimeout(() => {
    (async () => {
      tsParticles.load("tsparticles", {
        fps_limit: 60,
        interactivity: {
  
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
          color: { value: "#FF5733" },
          line_linked: {
            color: "#FF5733",
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
          number: { density: { enable: true, value_area: 800 }, value: numberOfPoints },
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
            stroke: { color: "#575859", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          }
        },
        polygon: {
          draw: { enable: false, lineColor: "#575859", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        retina_detect: true
      });
      
  
    })();
    element.style.opacity = 1;
  }, 500);

    


  }


  export function animateCanvas(direction, distance) {
    var canvas = document.getElementById('canvas');
    if (canvas) {
      switch (direction) {
        case 'left':
          canvas.style.left = `calc(0vh - ${distance})`;
          break;
        case 'right':
          canvas.style.left = `calc(0vh + ${distance})`;
          break;
        case 'up':
          canvas.style.top = `calc(0vh - ${distance})`;
          break;
        case 'down':
          canvas.style.top = `calc(0vh + ${distance})`;
          break;
        

        default:
          console.error('Invalid direction. Use "left", "right", "up", or "down".');
      }
    } else {
      console.error('Element with ID "canvas" not found.');
    }
  }