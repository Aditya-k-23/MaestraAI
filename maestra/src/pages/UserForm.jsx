
import "../styles/UserForm.css"

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();

    // State to manage form input values
    const [formData, setFormData] = useState({
        depthOfLearning: '',
        reasoningApproach: '',
        language: '',
    });

    // Handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform actions on form submission (e.g., send data to server)
        // API call to prompt engineer!!!
        navigate("/module");
        console.log('Form submitted:', formData);
    };

    const prepData = (e) => {
        e.preventDefault();
        setFormData({
            depthOfLearning: '3',
            reasoningApproach: 'analogical',
            language: 'English',
        })
        // reasoningApproach:
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
                    <label htmlFor="reasoningApproach">Reasoning Approach:</label>
                    <input
                    type="text"
                    id="reasoningApproach"
                    name="reasoningApproach"
                    value={formData.reasoningApproach}
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
                <div id="user-form-buttons">
                    <button onClick={prepData}>PREP DATA</button>
                    <button type="submit">GENERATE CONTENT</button>
                </div> 
            </form>
        </div>
    );
}
  
export default UserForm;