import { useState, useEffect } from 'react'
import './chat.css';


const ChatComponent = () => {
    const [value, setValue] = useState(null)
    const [message, setMessage] = useState(null)

    const getMessages = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await fetch('http://localhost:8000/completions', options)
            const data = await response.json()
            console.log(data)
            setMessage(data.choices[0].message)
        } catch (error) {
            console.error(error)
        }
    }
    { message != null ? console.log(message.content) : console.log('message content null') }


    return (
        <div className="main">
            <div className="messages">
                {message && <p>{message.content}</p>}
            </div>
            <div className="input">
                <input id="messageIn" value={value} onChange={(e) => setValue(e.target.value)} />
                <a id="submit" onClick={getMessages}>↑</a>
            </div>
        </div>
    );

}

export default ChatComponent;