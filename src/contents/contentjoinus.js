const JoinOurDiscord = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
                width: "60%",
            }}
        >

            <div className="home"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className='glassmorph' style={{
                    width: "100%",
                    minHeight: "30%",
                    height: "auto",
                    minWidth: "600px",
                    margin: "auto",
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start", // Alinea los elementos horizontalmente al centro
                    justifyContent: "center", // Alinea los elementos verticalmente al centro

                }}>
                    <p className="purple-title"> <a href="https://discord.gg/pMhsYwJUQu" className="shiny-link-purple"> Join our Discord </a> </p>
                    <p className="paragraph-normal">
                        Anyone is welcome to join our Discord and contribute to projects!
                        Our lab resides in <strong>#fmri-general</strong>, first step would be to introduce yourself there.
                    </p>

                </div>
            </div>
        </div>

    )
}

const Collaborations = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
                width: "60%",
            }}
        >

            <div className="home"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className='glassmorph' style={{
                    width: "100%",
                    minHeight: "30%",
                    height: "auto",
                    minWidth: "600px",
                    margin: "auto",
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",

                }}>
                    <h2 className="title purple-title">Collaborations</h2>
                    <p className="paragraph-normal">
                        We are always interested in collaborations! If you are interested in a potential collaboration, please get in touch by emailing <a href="https://paulscotti.github.io/" className="shiny-link">Paul</a> at <a href="mailto:scottibrain@gmail.com" className="shiny-link">scottibrain@gmail.com</a>.
                    </p>

                </div>
            </div>
        </div>

    )
}



const Interships = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
                width: "60%",
            }}
        >

            <div className="home"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className='glassmorph' style={{
                    width: "100%",
                    minHeight: "30%",
                    height: "auto",
                    minWidth: "600px",
                    margin: "auto",
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",

                }}>
                    <h2 className="title purple-title">Volunteer Internship</h2>
                    <p className="paragraph-normal">
                        If you have previous coding experience (particularly PyTorch) and have capacity to work on a neuroAI project for at least a 3-month commitment, please get in touch! Our aim will be to find a concrete project for you to work on under our mentorship, hopefully aiming towards publishable deliverables by the end of the internship. Email <a href="https://paulscotti.github.io/" className="shiny-link">Paul</a> at <a href="mailto:scottibrain@gmail.com" className="shiny-link">scottibrain@gmail.com</a> to inquire. Internships are unpaid.
                    </p>

                </div>
            </div>
        </div>

    )
}


const ContentJoinUs = () => {
    return (
        <div
            className="content"
            style={{
                display: "flex",
                flexDirection: "column",


            }}
        >
            <div className="steps-container-left">
                <JoinOurDiscord />
            </div>

            <div className="steps-container-right">
            <Collaborations />
            </div>

            <div className="steps-container-left">
            <Interships />
            </div>
        </div>

    )
}

export { ContentJoinUs }