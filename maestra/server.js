// import fetch from "node-fetch";

const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const API_KEY = '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'

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "how are you?" }],
            max_tokens: 250,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})
app.listen(PORT, () => console.log('Your server is running on PORT' + PORT))

