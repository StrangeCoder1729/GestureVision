// // import logo from './logo.svg';
// import './App.css';
// import React, {useRef} from 'react';
// import * as tf from "@tensorflow/tfjs";
// import * as handpose from "@tensorflow-models/handpose";
// import Webcam from "react-webcam";
// import {drawHand} from './utilities';

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const runHandpose = async()=>{
//     const net = await handpose.load()
//     console.log('handpose model loaded.')

//     // Creating a loop and detect the hands
//     // This below function states that every 100 millisecond it will be detecting whether our hand is within our frame, whether we actually recieved different detections 
//     setInterval(()=>{
//       detect(net)
//     }, 100) //  

//   }

//   const detect = async (net)=>{

//     if(
//       typeof webcamRef.current !== "undefined" && 
//       webcamRef.current !== null && 
//       webcamRef.current.video.readyState === 4)
//       {
//         // Getting the video properties
//         const video = webcamRef.current.video;
//         const videoWidth = webcamRef.current.video.videoWidth;
//         const videoHeight = webcamRef.current.videoheight;

//         // Setting the video height and width
//         webcamRef.current.video.width = videoWidth;
//         webcamRef.current.video.height = videoHeight;

//         // Setting the canvas height and width
//         canvasRef.current.width = videoWidth
//         canvasRef.current.height = videoHeight;

//         // Making the detections
//         const hand = await net.estimateHands(video);
//         console.log(hand)

//         // Drawing the mesh
//         const ctx = canvasRef.current.getContext('2d');
//         drawHand(hand, ctx);


//       }

//   }

//   runHandpose();
//   return (
//     <div className="App">
//       <header className="App-header">
//          <Webcam ref = {webcamRef}
//          style={{
//           postion: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zindex: 9,
//           width: 640,
//           height: 480
//          }}></Webcam>
         
//          <canvas
//          ref = {canvasRef}
//          style={{
//           postion: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zindex: 9,
//           width: 640,
//           height: 480
//          }}
//          ></canvas>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from './utilities';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded.');

    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Getting the video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Setting the video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Setting the canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Making the detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Drawing the mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
            transform: "scaleX(-1)" // Invert the webcam feed

          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
            transform: "scaleX(-1)" // Invert the webcam feed

          }}
        />
      </header>
    </div>
  );
}

export default App;
