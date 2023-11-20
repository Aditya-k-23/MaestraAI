import "../styles/ModuleContent.css";

import React, { useState } from 'react'
import SidebarModule from "../components/SidebarModule/SidebarModule";
import Chatbot from "../components/Chatbot/Chatbot";

const ModuleContent = () => {
    const [isChatbotSelected, setIsChatBotSelected] = useState(false)

    return (
        <>
            <div id="sidebar-container">
                {isChatbotSelected ? 
                    <div id="chatbox-container">
                        <div id="container-header">
                            <h3 id="sidebar-course-title">COMPUTER SCIENCE VARIABLES</h3>
                            <button onClick={()=> {setIsChatBotSelected(false)}} class="sidebar-toggle-button">Modules</button>
                            <Chatbot />
                        </div>
                    </div> 
                    :
                    <div id="modules-container">
                        <div id="container-header">
                            <h3 id="sidebar-course-title">COMPUTER SCIENCE VARIABLES</h3>
                            <button onClick={()=> {setIsChatBotSelected(true)}} class="sidebar-toggle-button">Chatbot</button>
                        </div>
                        <SidebarModule moduleTopic={"Variable Scope and Lifetime"} />
                        <SidebarModule moduleTopic={"Data Types and Variable Declarations"} />
                        <SidebarModule moduleTopic={"Variable Binding and References"} />
                    </div>
                }

            </div>

            <div id="content-container">

            </div>
        </>
    )
  };
  
  export default ModuleContent;