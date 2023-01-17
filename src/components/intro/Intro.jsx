import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef} from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1000,
            strings: ["Person", "Developer", "Designer", "Painter", "Student"],
        });

    
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I am</h2>
                    <h1>Evan Suslovich</h1>
                    <h3>A <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                    
            </div>

        </div>
    )
}