import "./topbar.scss";

import BoyIcon from "@mui/icons-material/Boy";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Coder.{" "}
          </a>
          <div className="itemContainer">
            <BoyIcon className="icon" />
            <span>(401)-428-4140</span>
          </div>
          <div className="itemContainer">
            <EmailIcon
              className="icon"
              onClick={() => window.open("mailto:evansuslovichjacob@gmail.com")}
            />
            <span
              onClick={() => window.open("mailto:evansuslovichjacob@gmail.com")}
            >
              evanjacobsuslovich@gmail.com
            </span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon
              className="icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/evansuslovich/")
              }
            />
            <span
              onClick={() =>
                window.open("https://www.linkedin.com/in/evansuslovich/")
              }
            >
              www.linkedin.com/in/evansuslovich/
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
