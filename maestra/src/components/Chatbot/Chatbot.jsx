import "./Chatbot.css"

const Chatbot = (props) => {
    
    const getResponse = (e) => {
        // should make async call to chatgpt API and then add response as 
        // a new chatbot-response element
        e.preventDefault();
        const input = document.getElementById("chatbot-input").value;
    }

    return (
        <>
            <div id="chatbot-response-container">
                <div id="chatbot-responses">
                    <p class="chatbot-response">
                        A computer science variable is a named location in computer memory.
                    </p>
                    <p id="chatbot-intro-message">
                        Hello, I'm Maestra! I'm here to help you learn Computer Science. 
                        I can answer questions about the course content, and I can also 
                        help you find resources to help you learn.
                    </p>
                </div>
            </div>
            <div id="chatbot-input-container">
                <input id="chatbot-input" type="text" placeholder="Got a burning question ... ?">
                </input>
                <button onClick={getResponse} id="chatbot-submit-button">CHAT</button>
            </div>
        </>
    )
}

export default Chatbot;