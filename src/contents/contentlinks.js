import React, { useState, useEffect } from 'react';
import { CircleAnimation203 } from './contentnews';
import { setPointsBackground, animateCanvas } from '../utils-canvas';

const LabMeetings = () => {
    return (
        <div className="lab-meetings background-with-gradient"
            id="lab-meetings"
            style={{
                marginLeft: 0,
                marginRight: 0,
            }}
        >

            <div className="lab-meetings-wrapper"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8em",
                }
                }
            >
                <CircleAnimation203 hoverElementId="lab-meetings" />
                <div>
                    <h1>Lab Meetings</h1>
                    <div className="meetings-content">
                        <div className="left-block">
                            <h2>Trends in NeuroAI: Journal club / Research talks </h2>
                            <span>
                                Subscribe to <em>Trends in NeuroAI</em> email list:
                                <a href="https://groups.google.com/g/medarc-fmri" target="_blank" className='shiny-link' rel="noopener noreferrer"> https://groups.google.com/g/medarc-fmri</a>
                            </span>
                            <p>
                                <i class="fa-regular fa-circle"></i> <a href="https://calendar.google.com/calendar/u/0?cid=Y2I0MjBhOWFhNTRmNmRiZWQwNDQwNTA3NjJlZjZjMDg0OWUwNDE1YzMwODRlNzY2Mjg2NWVkZWYwM2ExMDkzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noopener noreferrer">Google Calendar</a>
                            </p>
                            <p>
                                <i class="fa-regular fa-circle"></i><a href="https://calendar.google.com/calendar/ical/cb420a9aa54f6dbed044050762ef6c0849e0415c3084e7662865edef03a1093d%40group.calendar.google.com/public/basic.ics" target="_blank" rel="noopener noreferrer"> iCal</a>
                            </p>
                            <p>
                                <i class="fa-regular fa-circle"></i>  <a href="https://calendar.google.com/calendar/embed?src=cb420a9aa54f6dbed044050762ef6c0849e0415c3084e7662865edef03a1093d%40group.calendar.google.com" target="_blank" rel="noopener noreferrer">View in browser</a>
                            </p>
                            <p>
                                <i class="fa-regular fa-circle"></i> <a href="https://www.youtube.com/@humanscotti" target="_blank" rel="noopener noreferrer">Video recordings</a>
                            </p>
                        </div>
                        <div className="right-block">
                            <h2>Lab meeting working group</h2>
                            <span>Weekly project updates for active contributors: every Monday at 11:00 AM ET</span>
                            <p>
                                <i class="fa-regular fa-circle"></i> <a href="https://docs.google.com/document/d/1AckB0eowQOi7q173KzUH1Gny95Ddu5XenrDIho5daDk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Meeting notes</a>
                            </p>
                            <p>
                                <i class="fa-regular fa-circle"></i> <a href="https://www.notion.so/Weekly-working-group-video-recordings-1abcb44475af40dfaaea63454ec4a12f?pvs=21" target="_blank" rel="noopener noreferrer">Video recordings</a>
                            </p>
                            <span> MindEyeV1 past working group: </span>
                            <p className="struck-text">

                                <i class="fa-regular fa-circle"></i> <a href="https://docs.google.com/document/d/18K3cfqJ911SxKYoKszQUn_cBJm0tqbRAx6J8eBpz3Q8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Meeting notes</a>
                            </p>
                            <p className="struck-text">
                                <i class="fa-regular fa-circle"></i><a href="https://www.notion.so/MindEyeV1-meeting-recordings-old-e547e2cd773242f4a7bf0f538ba4741d?pvs=21" target="_blank" rel="noopener noreferrer"> Video recordings</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ResourcesArchive = () => {
    return (
        <div className="lab-meetings "
            id="resources-archive"
            style={{
                marginLeft: 0,
                marginRight: 0,
                padding: "0em",
                paddingBottom: "5em",
            }}
        >

            <div className="lab-meetings-wrapper"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    padding: "5em 8em",
                }
                }
            >

                <div>
                    <div className="meetings-content">
                        <div className="left-block" id="resources-content">

                            <div className="lab-meetings-wrapper"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0em",
                                }
                                }
                            >
                                <CircleAnimation203 hoverElementId="resources-content" />
                                <div style={
                                    {
                                        paddingLeft: "2em",
                                    }
                                }>
                                    <h1>Resources</h1>
                                    <div className="meetings-content">
                                        <div className="left-block"
                                            style={{
                                                width: "100%",
                                            }}
                                        >

                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://medarc.notion.site/MedARC-x-Stability-HPC-Guide-94da8a92f11f4f6485fc5179880bcaf1?pvs=25" target="_blank" rel="noopener noreferrer">MedARC x Stability HPC Guide</a>
                                            </p>
                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://medarc.notion.site/Weekly-working-group-video-recordings-1abcb44475af40dfaaea63454ec4a12f?pvs=25" target="_blank" rel="noopener noreferrer">Weekly working group video recordings</a>
                                            </p>
                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://www.youtube.com/playlist?list=PLESoyeOvrjfd0aeZTSeMC9XV_61CBzztA" target="_blank" rel="noopener noreferrer">YouTube channel with recordings of past journal clubs</a>
                                            </p>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-block" id="archive-content">
                            <div className="lab-meetings-wrapper"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0em",
                                }
                                }
                            >
                                <CircleAnimation203 hoverElementId="archive-content" />
                                <div
                                    style={
                                        {
                                            paddingLeft: "2em",
                                        }
                                    }
                                >
                                    <h1>Archive</h1>
                                    <div className="meetings-content">
                                        <div className="left-block"
                                            style={{
                                                width: "100%",
                                            }}
                                        >

                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://file.notion.so/f/f/11462e7c-4f6d-417c-830f-abd90d5d8788/92d96869-1a6b-485d-a208-4d0d6ab1ac29/MedARC_RealtimeRecon_proposal.pdf?id=a833fbc0-e00a-4144-82ee-aaecee776783&table=block&spaceId=11462e7c-4f6d-417c-830f-abd90d5d8788&expirationTimestamp=1701640800000&signature=mEqtEEpIruRA5_OGH00YEw5Z_e2KZY4JyyHGhYaClm8&downloadName=MedARC_RealtimeRecon_proposal_2022.pdf" target="_blank" rel="noopener noreferrer">MedARC_RealtimeRecon_proposal_2022.pdf</a>
                                            </p>
                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://medarc.notion.site/Projects-overview-old-d61c0a72498f4471bdfb44f7b80a5726?pvs=25" target="_blank" rel="noopener noreferrer">Projects overview (old)</a>
                                            </p>
                                            <p>
                                                <i class="fa-regular fa-circle"></i> <a href="https://medarc.notion.site/MindEyeV1-meeting-recordings-old-e547e2cd773242f4a7bf0f538ba4741d?pvs=25" target="_blank" rel="noopener noreferrer">MindEyeV1 meeting recordings (old)</a>
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

const ContentLinks = () => {
    useEffect(() => {
        setPointsBackground(0);
        animateCanvas('right', '100vw');
        animateCanvas('up', '100vh');

    }
    );

    return (
        <div className="team-container content"
            style={{
                marginTop: "5vh",
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }
            }
        >
            <div className="team-content">
                <LabMeetings />
                <ResourcesArchive />
            </div>
        </div>
    );
}


export { ContentLinks };