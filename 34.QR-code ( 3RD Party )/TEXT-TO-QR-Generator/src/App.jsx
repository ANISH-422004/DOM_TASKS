import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [Text, setText] = useState("");
  const [toshow, setToshow] = useState("");

  const HandelClick = () => {
    setToshow(Text);
    setText("");
  };

  return (
    <div className="h-screen w-full bg-cyan-900 flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-3">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Text To QR ..."
        />
        <button
          className="border border-cyan-300 text-cyan-300 rounded "
          onClick={HandelClick}
        >
          Generate Qr
        </button>
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <QRCode
          style={{ height: "auto", maxWidth: "30%", width: "20%" }}
          value={toshow}
        />
      </div>
    </div>
  );
};

export default App;
