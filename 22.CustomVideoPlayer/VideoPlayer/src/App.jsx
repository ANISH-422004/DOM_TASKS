import React, { useRef, useState } from "react";

const App = () => {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (vidRef.current.paused) {
      vidRef.current.play();
      setIsPlaying(true);
    } else {
      vidRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    vidRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    vidRef.current.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(vidRef.current.currentTime);
  };

  const handleVideoLoaded = () => {
    setDuration(vidRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    vidRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skip = (seconds) => {
    vidRef.current.currentTime += seconds;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen">
      <div
        className="relative w-[50%] bg-slate-800 rounded"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          className="w-full h-full aspect-video"
          ref={vidRef}
          src="./src/video/WhatsApp Video 2024-12-29 at 14.58.00_277c35cf.mp4"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleVideoLoaded}
        ></video>

        <div
          className={`player__controls bg-black/75 text-white w-full absolute bottom-0 left-0 p-1 flex flex-col gap-2 transition-all duration-300 ${
            showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="progress flex items-center">
            <input
              type="range"
              min="0"
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="player__button toggle bg-gray-800 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
              title="Toggle Play"
              onClick={togglePlay}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <div className="flex flex-col">
              <input
                type="range"
                name="volume"
                className="player__slider"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
              />
              <h3 className="text-center">Volume: {Math.round(volume * 100)}%</h3>
            </div>

            <div className="flex flex-col">
              <input
                type="range"
                name="playbackRate"
                className="player__slider"
                min="0.5"
                max="2"
                step="0.1"
                value={playbackRate}
                onChange={handlePlaybackRateChange}
              />
              <h3 className="text-center">Speed: {playbackRate}x</h3>
            </div>

            <button
              data-skip="-10"
              className="player__button bg-gray-800 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
              onClick={() => skip(-10)}
            >
              « 10s
            </button>

            <button
              data-skip="25"
              className="player__button bg-gray-800 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
              onClick={() => skip(25)}
            >
              25s »
            </button>

            <div>
              <h3>
                {new Date(currentTime * 1000).toISOString().substr(11, 8)} /{" "}
                {new Date(duration * 1000).toISOString().substr(11, 8)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
