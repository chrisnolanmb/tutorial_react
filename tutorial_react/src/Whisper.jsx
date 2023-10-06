import React, { useState } from "react";

function Whisper() {
  const [text, setText] = useState("");

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setText(speechToText);
    };
  };

  return (
    <div>
      <button onClick={handleSpeechRecognition}>Habla</button>
      <p>{text}</p>
    </div>
  );
}

export default Whisper;
