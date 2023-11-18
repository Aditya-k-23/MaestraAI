import axios from 'axios';

const ELEVEN_API = 'c12781f832131c4b55a2030a83c4cbb3';


const convertTextToAudio = async (textToConvert) => {
    const apiKey = ELEVEN_API;
    
    //voiceID?
    const voiceId = '21m00Tcm4TlvDq8ikWAM';


    const options = {
        method: 'POST',
        url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        headers: {
            accept: 'audio/mpeg',
            'content-type': 'application/json',
            'xi-api-key': apiKey,
        },
        data: {
            text: textToConvert
        },
        responseType: 'arraybuffer',
    };

    const response = await axios.request(options);
    return response.data;
};

export default convertTextToAudio;