import React, { useState, useEffect } from 'react';
import { CircleAnimation203 } from './contentnews';
import { setPointsBackground, animateCanvas } from '../utils-canvas';
import { initRenderer } from '../script';

const ButtonWithHover = ({ link, text }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="button-container curl-text" onClick={handleClick}>
            <span className="text"
                style={{
                    color: "#606060",
                    fontSize: "1.2em",
                }}
            >{text}</span>
            <div className="circle">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
};


const GridItem = ({ title, subtitle, description, link, buttonText, modelPath, threeDstuff, isMobile }) => {
    // generate a random text for the model id
    const modelId = Math.random().toString(36).substring(7);
    useEffect(() => {
        console.log('GridItem useEffect');
        initRenderer(modelPath, modelId, threeDstuff?.details, threeDstuff?.cameraPosition, isMobile);
    }, []);


    return (
        <div className=" glassback-lite grid-item">
            <div id={modelId} className="grid-image"
                style={{
                }}
            />
            <h3 className="grid-title">{title}</h3>
            <h4 className="grid-subtitle">{subtitle}</h4>
            <p className="grid-description">{description}</p>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                >
            <ButtonWithHover link={link} text={buttonText} />
            </div>
        </div>
    );
};

const GridComponent = ({ columns, items, isMobile }) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
    };

    return (
        <div className="grid-container" style={gridStyle}>
            {items.map((item, index) => (
                <GridItem key={index} {...item} isMobile={isMobile} />
            ))}
        </div>
    );
};

let projects = [
    

    {
        "title": "Infant-like articulator",
        "subtitle": "STATUS: DESIGN PHASE",
        "description": "This project is part of a larger “First 1,000 Days” initiative developed as part of Princeton University’s Hasson Lab, where they have cumulative 180 years of raw video and audio recording families with their babies in their homes from 7am to 7pm for 1,000 days each. This project is to create a proof-of-concept neural network “articulator” that can mimic how infants learn sound production over time.",
        "link": "https://drive.google.com/file/d/1rnIC7z0Cjm82s-6dh3U1jFTEJgoHwhys/view?usp=sharing",
        "buttonText": "Get involved",
        "modelPath": "models/gltf/phonograph.obj",
        "threeDstuff": {
            details: 10,
            cameraPosition: [200, 50, 60],
        }
    },

    {
        "title": "Brain-inspired transformers",
        "subtitle": "STATUS: PLANNING",
        "description": "A novel AI model inspired by the brain's structure. It modifies the transformer architecture to resemble cortical columns, with untied weights, a flattened architecture for spatial embedding, and local communication. This model aims to learn topographic specialization and support multidirectional communication, differing from standard feedforward networks. Key focuses include training feasibility, task performance, connectivity patterns, and topographical structures emerging from the model.",
        "link": "https://github.com/clane9/columnformers",
        "buttonText": "Get involved",
        "modelPath": "models/gltf/columns.obj",
        "threeDstuff": {
            details: 20,
            cameraPosition: [200, 50, 60],
        }
    },

    {
        "title": "MindEyeV2",
        "subtitle": "STATUS: IN PROGRESS",
        "description": "An evolving extension of the MindEye project, aiming to enhance the generability of its fMRI-to-image approach across various subjects. Currently integrating Stable Diffusion XL for more nuanced image reconstruction, the project explores incorporating additional data such as memory and behavior patterns.",
        "link": "https://github.com/MedARC-AI/MindEyeV2",
        "buttonText": "Get involved",
        "modelPath": "models/gltf/peacock.obj",
        "threeDstuff": {
            details: 25,
            cameraPosition: [200, 200, 0],
        }
    }, 
    
    {
        "title": "FMRI-fundational-model",
        "subtitle": "STATUS: IN PROGRESS",
        "description": "The project aims to create a versatile, self-supervised AI model trained on an extensive collection of public functional Magnetic Resonance Imaging (fMRI) data. Its goal is to learn a latent space that is generalizable across various participants, tasks, and scanner types. This approach addresses the challenge of variability in fMRI data and seeks to uncover universal features of brain activity. The model's potential lies in enhancing brain research, improving diagnoses in neurology, and advancing brain-computer interface technologies, by providing more personalized and accurate interpretations of fMRI data.",
        "link": "https://github.com/MedARC-AI/fMRI-foundation-model",
        "buttonText": "Get involved",
        "modelPath": "models/gltf/abstract.obj",
        "threeDstuff": {
            details: 25,
            cameraPosition: [150, 150, 0],
        }
    },

    {
        "title": "MindEye",
        "subtitle": "STATUS: PUBLISHED",
        "description": "A novel fMRI-to-image approach to retrieve and reconstruct viewed images from brain activity. Our model comprises two parallel submodules that are specialized for retrieval (using contrastive learning) and reconstruction (using a diffusion prior). MindEye can map fMRI brain activity to any high dimensional multimodal latent space, like CLIP image space, enabling image reconstruction using generative models that accept embeddings from this latent space.",
        "link": "https://medarc-ai.github.io/mindeye/",
        "buttonText": "View Project",
        "modelPath": "models/gltf/horuseye.obj",

    }, 
    
]



const ContentProjects = ({isMobile}) => {

    useEffect(() => {
        setPointsBackground(0);
        animateCanvas("right", "-250vh");

    }
    );

    const gridSize = isMobile ? 1 : 2;


    return (
        <div className="content"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div style={{
                marginTop: '100px',
            }}

            ></div>
            <GridComponent columns={gridSize} items={projects} isMobile={isMobile} />
        </div>
    )
}


export { ContentProjects };