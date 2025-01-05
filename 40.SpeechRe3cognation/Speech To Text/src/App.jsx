import React, { useState, useEffect } from "react";

const App = () => {
  const [transcripts, setTranscripts] = useState([]); // Store recognized speech
  const [isListening, setIsListening] = useState(false); // Track listening status

  let recognition;

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    recognition =
      new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false; 
    recognition.continuous = true; 
  }

  // Function to start speech recognition
  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript;
        setTranscripts((prevTranscripts) => [...prevTranscripts, transcript]);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  // Function to stop speech recognition
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 p-4 bg-slate-400">
      <h1 className="text-4xl text-center font-bold text-gray-800 font-mono">
        Speech Recognition App
      </h1>
      <div className="flex gap-4">
        {!isListening ? (
          <button
            onClick={startListening}
            className="px-6 py-2 bg-green-500 text-white rounded-md"
          >
            Start Listening
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="px-6 py-2 bg-red-500 text-white rounded-md"
          >
            Stop Listening
          </button>
        )}
      </div>
      <div className="mt-4 w-full max-w-3xl p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Transcript</h2>
        {transcripts.length > 0 ? (
          transcripts.map((text, index) => (
            <p key={index} className="mb-2 text-gray-800">
              {text}
            </p>
          ))
        ) : (
          <p className="text-gray-500">No speech detected yet...</p>
        )}
      </div>
    </div>
  );
};

export default App;
