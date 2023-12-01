import React, { useState, useEffect } from 'react';

const Footer = () => {
    return (<footer className="footer">
        <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#blog">Blog</a>
        </div>
        <div className="social-icons">
            <a href="https://twitter.com/MedARc_ai">
                <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://discord.com/invite/CqsMthnauZ">
                <i className="fab fa-discord"></i>
            </a>
            <a href="https://www.youtube.com/@MedARC/">
                <i className="fab fa-youtube"></i>
            </a>
        </div>
        <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
        </div>
    </footer>
    );
}


const HeaderComputer = () => {
    return (
        <header className="header" style={{
            color: "white",
            height: "8%",
            display: "flex",
            maxHeight: "150px",
            minHeight: "70px",
            padding: "1em",

        }}>
            <div className="logo"
                style={{
                    height: "100%",
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <a href="#home"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        color: "white",
                    }}>
                    <img src="logo_new_black.png" alt="MedARc Logo"
                        style={{
                            height: "50px",
                            zIndex: "1000"
                        }}
                    />
                </a>
            </div>
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    listStyle: "none",
                    width: "80%",
                    margin: "0",
                    padding: "0",
                    fontSize: "1.5em",
                }}>

                <ul className="menu"
                >
                    <li><a className="nav-list-desk" href="#home">Home</a></li>
                    <li><a className="nav-list-desk" href="#team">Team</a></li>
                    <li><a className="nav-list-desk" href="#joinus">Join Us</a></li>
                    <li><a className="nav-list-desk" href="#news">News</a></li>
                    <li><a className="nav-list-desk" href="#links">Links</a></li>
                    <li><a className="nav-list-desk" href="#archive">Archive</a></li>

                </ul>
            </nav>
            <div className="social-icons"
                style={{
                    height: "100%",
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5em",
                }}
            >
                <a href="https://twitter.com/MedARc_ai" className="header-social-icon">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://discord.com/invite/CqsMthnauZ" className="header-social-icon">
                    <i className="fab fa-discord"></i>
                </a>
                <a href="https://www.youtube.com/@MedARC/" className="header-social-icon">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </header>
    )
}


const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuStyles = {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
        maxHeight: isMenuOpen ? '100vh' : '0',
        height: '100vh',

    };

    return (
        <header className="header" style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            position: 'relative', // Allows the menu to position absolutely relative to the header
        }}>
            <div className="logo" style={{ height: "100%" }}>
                <a href="#home" style={{ textDecoration: "none", color: "white" }}>
                    <img src="logo_new_black.png" alt="MedARc Logo" style={{ height: "50px" }} />
                </a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ fontSize: "1.5em", background: "none", border: "none", color: "white" }}>
                {/* Replace with a menu icon */}
                ☰
            </button>

            <div style={menuStyles}>
                <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "80%", zIndex: 1000000, }}>
                    <ul className="menu"
                        style={{
                            listStyle: "none", textAlign: "center", padding: 0, margin: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
                        }}>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#home">Home</a></li>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#team">Team</a></li>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#joinus">Join Us</a></li>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#news">News</a></li>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#links">Links</a></li>
                        <li style={{ margin: "20px 0" }}><a className="nav-link" href="#archive">Archive</a></li>
                    </ul>
                </nav>

                <div className="social-icons" style={{ display: "flex", justifyContent: "center", fontSize: "1.5em" }}>
                    <a href="https://twitter.com/MedARc_ai" className="header-social-icon">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://discord.com/invite/CqsMthnauZ" className="header-social-icon">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://www.youtube.com/@MedARC/" className="header-social-icon">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}

const TitleComponent = () => {
    return (
        <div className="title-container">
            <div className="hero-title hero-title--three-lines">
                <h1>
                    <span>
                        <div className="u-splitted-lines-1">
                            <div>MedARC</div>
                        </div>
                    </span>
                    <span>
                        <div className="u-splitted-lines-2">
                            <div>Neuroimaging</div>
                        </div>
                    </span>
                    <span>
                        <div className="u-splitted-lines-3">
                            <div>&amp;</div>
                            <div style={{ color: '#FF5733' }}> AI </div>
                            <div>Lab</div>
                        </div>
                    </span>
                </h1>
            </div>
            <div className="hero-floating-text">
                <div className="hero-floating-text__left">
                    Exploring the human brain<br />
                </div>
                <div className="hero-floating-text__right">
                    Open source, open science, open minds.
                </div>
            </div>
        </div>
    );
};

const ParagraphHome = () => {
    return (
        <div className="content-paragraph"
            style={{
                display: 'block',
                marginTop: '10%',
                width: '60%',
                height: '80vh',
                minHeight: '500px',
                marginLeft: '15%',
            }}>
            <div className="purple-title">
                Our Work
            </div>
            <div className="paragraph-normal">
                <p>Our lab develops novel approaches to understanding neural data using the latest advancements from AI. Topics we are tackling include reconstruction of visual perception from fMRI brain activity and developing foundational neuroimaging models.</p>
            </div>
            <div className="paragraph-normal">
                <p>All projects are worked on in the public <a href="https://discord.gg/pMhsYwJUQu" className="shiny-link">MedARC discord server</a></p>
            </div>
            <div className="paragraph-normal">
                <p><a href="https://www.notion.so/MedARC-Neuroimaging-AI-Lab-e1116f115715456a96bb053a304b6292?pvs=21" className="shiny-link">We are open to volunteer contributions!</a> Co-author with us on our next project!</p>
            </div>
            <div className="paragraph-normal">
                <p><a href="https://groups.google.com/g/medarc-fmri" className="shiny-link">Subscribe</a> to our reading group <a href="https://www.notion.so/MedARC-Neuroimaging-AI-Lab-e1116f115715456a96bb053a304b6292?pvs=21" className="shiny-link">Trends in NeuroAI</a>!</p>
            </div>
        </div>
    )
}




const ParagraphHomeGlass = () => {
    return (
        <div
            style={{
                display: "flex",

            }}
        >
            <div style={{
                minWidth: "50%",
                height: "50%",
            }}>
            </div>
            <div className="home"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className='glassmorph' style={{
                    width: "50%",
                    minHeight: "30%",
                    height: "200px",
                    minWidth: "600px",
                    margin: "auto",
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Alinea los elementos horizontalmente al centro
                    justifyContent: "center", // Alinea los elementos verticalmente al centro

                }}>
                    <p
                        style={{
                            fontSize: "1.2em",


                        }}>
                        Our lab develops novel approaches to understanding neural data using the latest advancements from AI. Topics we are tackling include reconstruction of visual perception from fMRI brain activity and developing foundational neuroimaging models.</p>

                    <ul className='uli-content'>
                        <li><strong>All projects are worked on in the public <a href="https://discord.gg/pMhsYwJUQu" className="shiny-link">MedARC discord server</a></strong></li>
                        <li><strong><a href="https://www.notion.so/MedARC-Neuroimaging-AI-Lab-e1116f115715456a96bb053a304b6292?pvs=21" className="shiny-link">We are open to volunteer contributions!</a> Co-author with us on our next project!</strong></li>
                        <li><strong><a href="https://groups.google.com/g/medarc-fmri" className="shiny-link">Subscribe</a> to our reading group <a href="https://www.notion.so/MedARC-Neuroimaging-AI-Lab-e1116f115715456a96bb053a304b6292?pvs=21" className="shiny-link">*Trends in NeuroAI*</a>!</strong></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}


const ContentHome = () => {
    return (
        <div className="content"
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "90vh",
            }
            }

        >
            <TitleComponent />
            <ParagraphHome />


        </div>
    )
}


const Content = () => {

    return (

        <ContentHome />
    )
}
function reductePointsBackground() {
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
          number: { density: { enable: true, value_area: 800 }, value: 3 },
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
      renderer.setSize(Math.max(window.innerWidth * 1.5, 700), Math.max(window.innerHeight * 1.5, 700 * 18 / 9));
  
    })();
  }
  
function CanvasController() {
    const targetPositionVH = 70; // Example: 50vh
  
    const animateCanvas = () => {
      var canvas = document.getElementById('canvas');
      if (canvas) {
        canvas.style.left = '100vh';
      } else {
        console.error('Element with ID "canvas" not found.');
      }
    }
  
  
    useEffect(() => {
      const handleScroll = (event) => {
        var viewportHeight = window.innerHeight;
        var targetPositionPixels = (viewportHeight * targetPositionVH) / 100;
  
        var currentPosition = event.target.scrollTop;
  
        console.log(currentPosition);
  
        if (currentPosition >= targetPositionPixels) {
          reductePointsBackground();
          animateCanvas();
        }
      };
  
      const rootElement = document.getElementById("react-root");
      rootElement.addEventListener('scroll', handleScroll);
  
      return () => {
        rootElement.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    return (
      <>
        {/* Your JSX markup here */}
      </>
    );
  }

class WebPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 800,
            currentContent: "home"
        };

        // Bind the handleResize method to the component
        this.handleResize = this.handleResize.bind(this);
    }

    // Lifecycle method when component is mounted
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    // Lifecycle method when component is about to unmount
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        
    }

    // Method to handle window resize
    handleResize() {
        this.setState({
            isMobile: window.innerWidth <= 800
        });
    }


    render() {
        return (
            <>
                {this.state.isMobile ? <HeaderMobile /> : <HeaderComputer />}
                <Content />
                <Footer />
                <CanvasController />
            </>

        )
    }
}

export default WebPage;