import { useState, useEffect, useContext } from 'react';
import convertTextToAudio from './eleven';
import { Context } from "./App";
import * as fs from 'fs';

const sendAudioFile = file => {
  const formData = new FormData();
  formData.append('audio-file', file);
  return fetch('http://localhost:8000/audioUpload', {
    method: 'POST',
    body: formData
  });
};


const AudioComponent = () => {
  const { lessonPlan } = useContext(Context);
  lessonPlan && console.log('plan', lessonPlan.content, lessonPlan);

  // State variable to store URL of the audio source
  const [sourceUrl, setSourceUrl] = useState(null);

  // Asynchronous function to fetch audio data and update state variable
  const fetchAndUpdateAudioData = async () => {
    const audioData = lessonPlan && await convertTextToAudio(lessonPlan.content);

    // Create a new Blob object from the fetched audio data with matching MIME type
    const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });

    // Create a URL for the audio blob
    const blobUrl = URL.createObjectURL(audioBlob);
    sendAudioFile(audioBlob);

    // var file = new File([audioBlob], "./Wav2Lip/Recording");


    //   fs.writeFile('./Wav2Lip/Recording.mp3', audioBlob, (err) => { 

    //     // In case of a error throw err. 
    //     if (err) throw err; 
    // })

    // const downloadLink = document.createElement('a');
    // downloadLink.href = blobUrl;
    // downloadLink.download = 'Recording.mp3'; // Set desired filename

    // Simulate click to trigger download
    // downloadLink.click();

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(audioBlob, 'Recording.mp3'); // Specify desired filename
    } else {
      console.error('This method is not supported in your browser.');
    }



    // fs.writeFileSync('./', file);

    // console.log('file:', File.webkitRelativePath, file);


    // Update the sourceUrl state variable with the generated URL for the audio blob
    setSourceUrl(blobUrl);
  };

  // Call the fetchAndUpdateAudioData once when the component mounts
  useEffect(() => {
    fetchAndUpdateAudioData();
  }, [lessonPlan]);

  // Render an audio element when source URL is available
  return (
    <div>
      {sourceUrl && (
        <audio autoPlay controls>
          <source src={sourceUrl} type='audio/mpeg' />
        </audio>
      )}
    </div>
  );
};

export default AudioComponent;