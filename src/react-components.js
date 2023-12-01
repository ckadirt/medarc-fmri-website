import React, { useState, useEffect, useRef } from 'react';
import { setPointsBackground, animateCanvas } from './utils-canvas';
import { showUp, showDown } from './utils-animation';
import { ContentHome } from './contents/contenthome';
import { ContentJoinUs } from './contents/contentjoinus';

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


const HeaderComputer = ({ setCurrentContent }) => {
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

                <ul className="menu">
                    <li><a className="nav-list-desk" href="#home" onClick={() => setCurrentContent("home")}>Home</a></li>
                    <li><a className="nav-list-desk" href="#joinus" onClick={() => setCurrentContent("joinus")}>Join Us</a></li>
                    <li><a className="nav-list-desk" href="#team" onClick={() => setCurrentContent("team")}>Team</a></li>
                    <li><a className="nav-list-desk" href="#news" onClick={() => setCurrentContent("news")}>News</a></li>
                    <li><a className="nav-list-desk" href="#links" onClick={() => setCurrentContent("links")}>Links</a></li>
                    <li><a className="nav-list-desk" href="#archive" onClick={() => setCurrentContent("archive")}>Archive</a></li>
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



const Content = (props) => {

    let [prevContent, setPrevContent] = useState("home");

    // useEffect(() => {
    //     if (props.currentContent === "home") {
    //         reverseVanishAndMoveDown();
    //     } else {
    //         vanishAndMoveDown();
    //     }
    // }, [props.currentContent]);

    useEffect(() => {
        console.log('Current Content:', props.currentContent, 'Previous Content:', prevContent);
        console.log(prevContent !== props.currentContent)
        showUp();
        if (prevContent !== props.currentContent) {
            console.log("entro")
            showDown();
            // set timeout to wait for animation to finish
            setTimeout(() => {
                
                setPrevContent(props.currentContent);
                setTimeout(() => {
                    showUp();
                }
                , 500);
                console.log(prevContent);
                
            }, 500);
            // update prevContent
            
            
        }
        
    }, [props.currentContent]);

    return (
        <>
            {prevContent === "home" && <ContentHome />}
            {prevContent === "joinus" && <ContentJoinUs />}
        </>
    );
};



function BlockController(props) {
    const positionsVH = [0, 50, 140, 200]; // Array of positions in vh

    useEffect(() => {
        const handleScroll = (event) => {
            var viewportHeight = window.innerHeight;
            var currentPosition = event.target.scrollTop;
            console.log(currentPosition);

            // Convert VH positions to pixels
            const positionsPixels = positionsVH.map(vh => (viewportHeight * vh) / 100);
            console.log('Positions in pixels:', positionsPixels);

            // Determine the current block
            let currentBlock = positionsPixels.findIndex((position, index) => {
                const nextPosition = positionsPixels[index + 1] || Infinity;
                return currentPosition >= position && currentPosition < nextPosition;
            });

            if (currentBlock === -1) {
                props.setCurrentBlock(positionsPixels.length - 1); // If the currentPosition exceeds the last element in positionsPixels
            } else {
                props.setCurrentBlock(currentBlock);
            }

            console.log('Current Block:', currentBlock);

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

const CanvasAnimator = (props) => {
    let prevBlock = 0;

    const updatePrevBlock = (newBlock) => {
        prevBlock = newBlock;
    }
    useEffect(() => {
        console.log('Current Blocck:', props.currentBlock, 'Previous Block:', prevBlock);
        if (true) {
            updatePrevBlock(props.currentBlock);
            if (props.currentBlock === 1) {
                setPointsBackground(3);
                animateCanvas('right', '100vh');
                animateCanvas('up', '30vh');
            }
            if (props.currentBlock === 0) {
                animateCanvas('right', '0vh');
                animateCanvas('up', '0vh');
                setPointsBackground(40);
            }
        }
    }, [props.currentBlock]);

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
            currentContent: "joinus",
            currentBlock: 0,
        };

        // Bind the handleResize method to the component
        this.handleResize = this.handleResize.bind(this);
    }

    setCurrentBlock = (newBlock) => {
        this.setState({ currentBlock: newBlock });
    }

    setCurrentContent = (newContent) => {
        this.setState({ currentContent: newContent });
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
                {this.state.isMobile ?
                    <HeaderMobile /> :
                    <HeaderComputer
                        setCurrentContent={this.setCurrentContent}
                    />}
                <Content currentContent={this.state.currentContent} />
                <Footer />
                <BlockController
                    currentBlock={this.state.currentBlock}
                    setCurrentBlock={this.setCurrentBlock}
                />
                <CanvasAnimator currentBlock={this.state.currentBlock} />
            </>

        )
    }
}

export default WebPage;