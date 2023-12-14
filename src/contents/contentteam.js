import React, { useEffect, useState } from 'react';
import ImageEffectComponent from '../image-utils';
import { setPointsBackground, animateCanvas } from '../utils-canvas';

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

const TeamNoPicture = () => (
    <div className="team-member full-width-element glassback">
        <ul className="list-members">
            <li>Ashutosh Narang</li>
            <li>Connor Lane</li>
            <li>Charan Santhirasegaran</li>
            <li>Mohammed Baharoon</li>
            <li>Jonathan Xu</li>
            <li>Dingli Yu</li>
            <li>Alex Nguyen</li>
            <li>Filip Vercruysse</li>
        </ul>
    </div>
);

const PastTeamMembers = () => (
    <div className="team-member full-width-element glassback">
        <ul class="list-members">
            <li>Atmadeep Banerjee</li>
            <li>Jimmie Goode</li>
            <li>Stepan Shabalin</li>
            <li>Ethan Cohen</li>
            <li>Aidan James Dempster</li>
            <li>Nathalie Verlinde</li>
            <li>David Weisberg</li>
        </ul>
    </div>
);

const TeamMembers = ({ teamMembers, gridSize, isMobile, TeamNoPicture }) => {
    const gridClass = `team-grid grid-${gridSize}`;

    return (
        <div className={gridClass}>
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member glassback">
                    <ImageEffectComponent imagePath={member.picture} isMobile={isMobile} />
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
            {TeamNoPicture && <TeamNoPicture />}


        </div>
    );
};


const ContentTeam = ({ isMobile }) => {

    useEffect(() => {
        setPointsBackground();
        animateCanvas('left', '250vh');
    }
    );

    const gridSize = isMobile ? 2 : 3;

    return (
        <div
            className="team-content-container content"
        >
            <div className='team-container'>
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

                    <TeamMembers teamMembers={teamMembersData} gridSize={gridSize} isMobile={isMobile} TeamNoPicture={TeamNoPicture} />
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

                    <TeamMembers teamMembers={collaboratorsData} gridSize={gridSize} isMobile={isMobile} />
                </div>
                <div 
                    style={{
                        paddingBottom: "5em",
                    }
                    }
                >
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
                        Past Team Members
                    </div>

                    <PastTeamMembers />

                </div>
            </div>
        </div>
    );
};



const teamMembersData = [
    {
        name: "Paul Scotti",
        role: "Principal Investigator",
        website: "http://www.paulscotti.com",
        picture: "team-pictures/paul.png"
    },
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
        name: "Cesar Torrico",
        role: "Core team member",
        website: "http://www.ckadirt.com/",
        picture: "team-pictures/cesar.png"
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