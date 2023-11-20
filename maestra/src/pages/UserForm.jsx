
import "../styles/UserForm.css"
import { getModules } from "../api/api.js"

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();

    const [isGeneratingModules, setIsGeneratingModules] = useState(false);
    // State to manage form input values
    const [formData, setFormData] = useState({
        depthOfLearning: '',
        learningFramework: '',
        language: '',
        courseTopic: ''
    });

    // Handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsGeneratingModules(true);
    
        // generate 3 course modules and pass to module page
        getModules(formData.courseTopic)
        .then(response => {
            console.log(response)
            // where response is a JSON object cotnaining 3 modules
            navigate("/module", {state: {modules: response, formData: formData}});
            setIsGeneratingModules(false);
        });


        // const res = {moduleOne: "chika", moduleTwo: "chika2", moduleThree: "chika2"}
    };

    const prepData = async (e) => {
        e.preventDefault();
        setFormData({
            depthOfLearning: '3',
            learningFramework: 'analogical',
            language: 'English',
            courseTopic: 'Ancient History'
        })

        //lessonFramework:
            // story-telling
            // Deductive reasoning
            // Inductive reasoning
            // Analogical reasoning
            // Abductive reasoning
            // Cause-and-effect reasoning
            // Critical thinking
            // Decompositional reasoning
    }

    return (
        <div id="user-form-container">
            <form id="user-form" onSubmit={handleSubmit}>
                <div class="user-form-input">
                    <label htmlFor="depthOfLearning">Depth Of Learning (1-10):</label>
                    <input
                    type="text"
                    id="depthOfLearning"
                    name="depthOfLearning"
                    value={formData.depthOfLearning}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div class="user-form-input">
                    <label htmlFor="learningFramework">Learning Framework:</label>
                    <input
                    type="text"
                    id="learningFramework"
                    name="learningFramework"
                    value={formData.learningFramework}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div class="user-form-input">
                    <label htmlFor="language">Language:</label>
                    <input
                    type="text"
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div class="user-form-input">
                    <label htmlFor="coursetopic">Course Topic:</label>
                    <input
                    type="text"
                    id="courseTopic"
                    name="courseTopic"
                    value={formData.courseTopic}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div id="user-form-buttons">
                    <button onClick={prepData}>PREP DATA</button>
                    <button type="submit">GENERATE CONTENT</button>
                </div> 
                {isGeneratingModules ? <h2>Generating Modules . . .</h2> : null}
            </form>
        </div>
    );
}
  
export default UserForm;