import "./resume-intro.scss";
import ExpandButton from "../util/ExpandButton";

export default function ResumeIntro({ setShow, show }) {
  return (
    <div className="resume-intro" id="resume">
      <div className="text">
        <h1>Resume</h1>
        <ExpandButton setShow={setShow} show={show} altText={"Resume"} />
      </div>
    </div>
  );
}
