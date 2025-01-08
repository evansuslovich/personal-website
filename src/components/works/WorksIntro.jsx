import "./works-intro.scss";
import ExpandButton from "../util/ExpandButton";

export default function WorksIntro({ setShow, show }) {
  return (
    <div className="works-intro" id="works">
      <div className="text">
        <h1>Art Projects</h1>
        <ExpandButton
          setShow={setShow}
          show={show}
          altText={"Github Projects"}
        />
      </div>
    </div>
  );
}
