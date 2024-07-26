# GestureVision

GestureVision is a real-time hand detection and tracking application built with React, TensorFlow.js, and the Handpose model. This application captures video from your webcam, detects hands, tracks their landmarks, and visualizes the results on a canvas overlay.

## Features

- Real-Time Hand Detection: Detect and track hands in real-time using the Handpose model.
- Landmark Visualization: Display detected hand landmarks and joint connections on a canvas overlay.
- Webcam Feed: Utilize webcam input for live hand tracking.
- Inverted Video Feed: Mirror the webcam feed to match typical webcam orientation.

## Installation

To get started with GestureVision, follow these steps:

1. Clone the Repository

   ```bash
   git clone https://github.com/StrangeCoder1729/GestureVision.git
   cd GestureVision
   ```

2. Install Dependencies

   Ensure you have Node.js and npm installed. Then, install the project dependencies:

   ```bash
   npm install
   ```

3. Start the Development Server

   Run the following command to start the development server:

   ```bash
   npm start
   ```

   Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

1. Allow Webcam Access: Grant the application permission to access your webcam when prompted.
2. View Hand Tracking: The application will display the webcam feed with hand landmarks and connections overlaid in real-time.

## Code Overview

- `App.js`: The main React component that handles webcam input, hand detection, and drawing on the canvas.
- `utilities.js`: Contains the `drawHand` function for drawing hand landmarks and connections on the canvas.

## Credits

This project is inspired by the work of Nicholas Renotte, who has created educational content and examples related to hand tracking and TensorFlow.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- React - A JavaScript library for building user interfaces.
- TensorFlow.js - An open-source library for machine learning in JavaScript.
- Handpose Model - A TensorFlow.js model for hand tracking.
- react-webcam - A React component for accessing the webcam.
