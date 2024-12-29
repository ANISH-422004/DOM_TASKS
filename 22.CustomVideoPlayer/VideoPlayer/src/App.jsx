import React, { useRef, useState } from "react";

const App = () => {
  const vidRef = useRef(null);
  const intervalRef = useRef(null);
  const [isplaying, setIsplaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setprogress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [useNavtivecontrol, setUseNavtivecontrol] = useState(window.innerWidth<767)
  // console.log(vidRef.current.);

  return (
    <div className="flex justify-center items-center">
      <video
        ref={vidRef}
        src="./src/video/WhatsApp Video 2024-12-29 at 14.58.00_277c35cf.mp4"
        controls
      ></video>
    </div>
  );
};

export default App;
