import React, { useState } from 'react';
import ImageEffectComponent from '../image-utils';

const ButtonWithHover = ({ link }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="button-container" onClick={handleClick}>
            <span className="text"
                style={{
                    color: "#606060",
                    fontSize: "0.9em",
                }}
            >Website</span>
            <div className="circle">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
};


const TeamMembers = ({ teamMembers, gridSize }) => {
    const gridClass = `team-grid grid-${gridSize}`;

    return (
        <div className={gridClass}>
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member glassback">
                    <ImageEffectComponent imagePath={member.picture} />
                    <h2>{member.name}</h2>
                    <div className="line"
                        style={{
                            borderBottom: "1px solid #606060",
                            margin: "10px",
                        }}
                    />
                    <p>{member.role}</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10px",
                        }}
                    >

                        <ButtonWithHover link={member.website} />
                    </div>
                </div>
            ))}
        </div>
    );
};


const ContentTeam = () => {
    return (
        <div
            className="team-content-container content"
        >

            <div >
                <div className="purple-title"
                    style={{
                        fontFamily: "Cormorant Garamond",
                        alignSelf: "start",
                        margin: "2em 0 1em 0",
                        fontSize: "2.5em",
                        color: "#141414",
                        borderBottom: "1px solid #141414",
                        paddingBottom: "0.5em",
                    }
                    }
                >
                    Team
                </div>

                <TeamMembers teamMembers={teamMembersData} gridSize={3} />
            </div>

            <div >
                <div className="purple-title"
                    style={{
                        fontFamily: "Cormorant Garamond",
                        alignSelf: "start",
                        margin: "2em 0 1em 0",
                        fontSize: "2.5em",
                        color: "#141414",
                        borderBottom: "1px solid #141414",
                        paddingBottom: "0.5em",
                    }
                    }
                >
                    Collaborators
                </div>

                <TeamMembers teamMembers={collaboratorsData} gridSize={3} />
            </div>

        </div>
    );
};



const teamMembersData = [
    {
        name: "Tanishq Abraham",
        role: "MedARC CEO",
        website: "https://medarc.ai/",
        picture: "team-pictures/tanishq.png"
    },
    {
        name: "Mihir Tripathy",
        role: "Core team member",
        website: "https://github.com/mihirneal",
        picture: "team-pictures/mihir.png"
    },
    {
        name: "Paul Scotti",
        role: "Principal Investigator",
        website: "http://www.paulscotti.com",
        picture: "team-pictures/paul.png"
    },
    {
        name: "Paul Scotti",
        role: "Principal Investigator",
        website: "http://www.paulscotti.com",
        picture: "team-pictures/paul.png"
    }
];

const collaboratorsData = [
    {
        name: "Sanjeev Arora",
        role: "Professor, Princeton Univ.",
        website: "https://unsupervised.cs.princeton.edu",
        picture: "team-pictures/sanjeev.png"
    },
    {
        name: "Benjamin Cowley",
        role: "Professor, Cold Spring Harbor Laboratory",
        website: "https://cowleygroup.cshl.edu/",
        picture: "team-pictures/benjamin.png"
    },
    {
        name: "Uri Hasson",
        role: "Professor, Princeton Univ.",
        website: "https://hassonlab.princeton.edu/",
        picture: "team-pictures/uri.png"
    },
    {
        name: "Kenneth Norman",
        role: "Professor, Princeton Univ.",
        website: "compmem.princeton.edu",
        picture: "team-pictures/kenneth.png"
    }
];


export { ContentTeam }