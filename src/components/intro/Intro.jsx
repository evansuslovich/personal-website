import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef} from "react";



export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1500,
            strings: ["Person", "Developer", "Designer", "Artist", "Student"],
        });

    
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/evan-suslovich1.png" alt="" />
                </div>
                <div className="backgroundContainer">
                    <img src="assets/background.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I am</h2>
                    <h1>Evan Suslovich</h1>
                    <h3>A Thinking <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                    
            </div>

        </div>
    )
}