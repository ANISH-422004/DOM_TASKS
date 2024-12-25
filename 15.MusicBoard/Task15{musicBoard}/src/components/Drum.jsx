import { useEffect, useState } from "react";

function Drum(props) {
	const [playing, setPlaying] = useState(false); // will use it to visually reprsent that key was active


	const play = () => {
		setPlaying(true);

		new Audio(props.sound).play();  // creates a audio in stance with the props.sound src for each button this fuction is made with diff src and each unique drum comp holds the same play() but wih diff props.src in that instance for that audio
		 
		setTimeout(() => {
			setPlaying(false);
		}, 100);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === props.letter.toLowerCase()) {
				// Inside the useEffect, you're adding a keydown event listener to the document object. This listener checks if the key pressed (e.key) matches the key assigned to the drum (props.letter). If it does, it calls the play() function.

				//  how it working in your mycase:
				// When the component mounts (and the effect is run), you add an event listener to the document for any keydown event.
				// Inside the listener, you're checking if the key pressed matches the props.letter of the current drum button.
				// If the key pressed matches, the play() function is triggered, which plays the sound for that drum button
				play();
			}
		});
	}, []);

	return (
		<div className="p-2" onClick={play}>
			<div className={`drum ${playing ? "playing" : ""} key bg-slate-300 p-4 rounded`}  >{props.letter}</div>
		</div>
	);
}

export default Drum;
