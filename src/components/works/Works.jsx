import "./works.scss"
import WorksIntro from "./WorksIntro";

export default function Works() {
    return (
        <div className="works" id="works">

            <WorksIntro />

            <div className="paintings">

                <div className="card">
                    <h1>Emotions</h1>
                    <h2>2020</h2>
                    <div className="painting-container">
                        <img src="paintings/art_1.jpeg" className="painting" alt="" />
                    </div>
                </div>


                <div className="card">
                    <h1>Conformity</h1>
                    <h2>2021</h2>
                    <div className="painting-container">
                        <img src="paintings/art_2.jpeg" className="painting" alt="" />
                    </div>
                </div>

                <div className="card">
                    <h1>Anxious Fiery Blues</h1>
                    <h2>2021</h2>
                    <div className="painting-container">
                        <img src="paintings/art_3.jpg" className="painting" alt="" />
                    </div>
                </div>

                <div className="card">
                    <h1>The Structured Day <br /> and  <br /> Surreal Dream</h1>
                    <h2>2022</h2>
                    <div className="painting-container">
                        <img src="paintings/art_4.jpeg" className="painting" alt="" />
                    </div>
                </div>

                <div className="card">
                    <h1>Untitled</h1>
                    <h2>2022</h2>
                    <div className="painting-container">
                        <img src="paintings/art_5.jpeg" className="painting" alt="" />
                    </div>
                </div>


                <div className="card">
                    <h1>Oil on Goyard</h1>
                    <h2>2022</h2>
                    <div className="painting-container">
                        <img src="paintings/art_6.jpeg" className="painting" alt="" />
                    </div>
                </div>

                <div className="card">
                    <h1>Projection</h1>
                    <h2>2022</h2>
                    <div className="painting-container">
                        <img src="paintings/art_7.jpeg" className="painting" alt="" />
                    </div>
                </div>

            </div>
        </div >
    )
}