import "./intro.scss";


export default function Intro() {
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
                    <h3>Creator. <span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                    
            </div>

        </div>
    )
}