import "../styles/VideoDemo.css";

import { useNavigate } from "react-router-dom";

const VideoDemo = () => {
  const navigate = useNavigate();

    return (
      <div id="video-demo-page-wrapper">
        <div id="video-demo-container">
          <div class="video-demo">
            <video id="wav2lip-video-demo-one" controls width="60%" height="40%">
              <source id="wav2lip-video-src-one" src="samplea.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
              <h3>Language: some_language</h3>
              <h3>depthOfLearning: some_depthOfLearning</h3>
              <h3>reasoningApproach: some_reasoningApproach</h3>
              <h3>moduleTopic: some_moduleTopic</h3>
            </div>
          </div>

          <div class="video-demo">
            <video id="wav2lip-video-demo-two" controls width="60%" height="40%">
              <source id="wav2lip-video-src-two" src="samplea.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
            <h3>Language: some_language</h3>
              <h3>depthOfLearning: some_depthOfLearning</h3>
              <h3>reasoningApproach: some_reasoningApproach</h3>
              <h3>moduleTopic: some_moduleTopic</h3>
            
            </div>
          </div>

          <div class="video-demo">
            <video id="wav2lip-video-demo-three" controls width="60%" height="40%">
              <source id="wav2lip-video-src-three" src="sampled.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
            <h3>Language: some_language</h3>
              <h3>depthOfLearning: some_depthOfLearning</h3>
              <h3>reasoningApproach: some_reasoningApproach</h3>
              <h3>moduleTopic: some_moduleTopic</h3>
              
            </div>
          </div>
        </div>
        <button id="video-container-button" onClick={()=>{ navigate("/module") }}>Back (Module Content)</button>
      </div>
    )
  };
  
  export default VideoDemo;