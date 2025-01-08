import "./portfolio-intro.scss";
import ExpandButton from "../util/ExpandButton";

export default function PortfolioIntro({ setShowPortfolio, showPortfolio }) {
  return (
    <div className="portfolio-intro">
      <div className="text">
        <h1>Github Projects</h1>
        <ExpandButton
          setShow={setShowPortfolio}
          show={showPortfolio}
          altText={"Github Projects"}
        />
      </div>
    </div>
  );
}
