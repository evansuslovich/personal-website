import { useState } from "react";
import "./works.scss";
import WorksIntro from "./WorksIntro";

export default function Works() {
  const [show, setShow] = useState(true);

  return (
    <div className="works" id="works">
      <WorksIntro setShow={setShow} show={show} />

      {show && (
        <div className="paintings">
          <div className="card">
            <h1>Emotions</h1>
            <h2>2020</h2>
            <h3>Sold - Providence, RI</h3>

            <div className="painting-container">
              <img
                src="assets/paintings/art_1.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Merge</h1>
            <h2>2021</h2>
            <h3>Sold - Providence, RI</h3>

            <div className="painting-container">
              <img
                src="assets/paintings/art_2.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Anxious Fiery Blues</h1>
            <h2>2021</h2>
            <h3>Sold - Boston, MA</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_3.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>
              The Structured Day <br /> and <br /> Surreal Dream
            </h1>
            <h2>2022</h2>
            <h3>Sold - Tampa, FL</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_4.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Untitled</h1>
            <h2>2022</h2>
            <h3>Sold - Tampa, FL</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_5.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Projection</h1>
            <h2>2022</h2>
            <h3>Sold - Boston, MA</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_7.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Don't Look Inside</h1>
            <h2>2023</h2>
            <h3>Sold - Providence, RI</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_8.jpg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Yearning</h1>
            <h2>2023</h2>
            <h3>Sold - Providence, RI</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_9.jpeg"
                className="painting"
                alt=""
              />
            </div>
          </div>

          <div className="card">
            <h1>Untitled</h1>
            <h2>2023</h2>
            <h3>Sold - Boston, MA</h3>
            <div className="painting-container">
              <img
                src="assets/paintings/art_10.jpeg"
                className="painting"
                alt="Untitled"
              />
            </div>
          </div>

          <div className="card">
            <h1>Doves</h1>
            <h2>2024</h2>
            <div className="painting-container">
              <img
                src="assets/paintings/art_12.jpeg"
                className="painting"
                alt="Untitled"
              />
            </div>
          </div>

          <div className="card">
            <h1>Organs of the Overseer</h1>
            <h2>2024</h2>
            <div className="painting-container">
              <img
                src="assets/paintings/art_11.jpeg"
                className="painting"
                alt="Untitled"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
}
