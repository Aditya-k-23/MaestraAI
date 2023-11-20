import "../styles/ModuleContent.css";

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SidebarModule from "../components/SidebarModule/SidebarModule";
import Chatbot from "../components/Chatbot/Chatbot";

const ModuleContent = () => {
    const navigate = useNavigate();
    const [isChatbotSelected, setIsChatBotSelected] = useState(false)

    return (
        <div id="module-content-page-wrapper">
            <div id="sidebar-container">
                {isChatbotSelected ? 
                    <div id="chatbox-container">
                        <div id="container-header">
                            <h3 onClick={()=>{navigate("/")}} id="sidebar-course-title">COMPUTER SCIENCE VARIABLES</h3>
                            <button onClick={()=> {setIsChatBotSelected(false)}} class="sidebar-toggle-button">Modules</button>
                        </div>
                        <Chatbot />
                    </div> 
                    :
                    <div id="modules-container">
                        <div id="container-header">
                            <h3 onClick={()=>{navigate("/")}} id="sidebar-course-title">COMPUTER SCIENCE VARIABLES</h3>
                            <button onClick={()=> {setIsChatBotSelected(true)}} class="sidebar-toggle-button">Chatbot</button>
                        </div>
                        <SidebarModule moduleTopic={"Variable Scope and Lifetime"} />
                        <SidebarModule moduleTopic={"Data Types and Variable Declarations"} />
                        <SidebarModule moduleTopic={"Variable Binding and References"} />
                    </div>
                }
            </div>
            <div id="content-container">
                <div id="content-container-wrapper">
                    <video id="content-wav2lip-video" controls width="60%" height="40%">
                        <source id="content-wav2lip-video-src" src="result_voice.mp4" type="video/mp4" />
                        This browser does not support the video element.
                    </video>
                    <button id="content-container-button" onClick={()=>{ navigate("/videos") }}>VIDEO DEMOS</button>
                </div>
            </div>
        </div>
    )
  };
  
  export default ModuleContent;