
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

export { ContentHome, ParagraphHome, ParagraphHomeGlass, TitleComponent };
