import { useEffect, useState } from "react";
import Languages from "./Languages";
import PortfolioIntro from "./PortfolioIntro";
import "./portfolio.scss";
import fakeGithubData from "./fakeGithubData.json";

export default function Portfolio() {
  const [repoData, setRepoData] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const createRepoCards = (repos) => {
      return repos.map((repo) => (
        <div className="card" key={repo.name}>
          <div className="card-header">
            <h1 className="repo-title">{repo.name}</h1>

            <Languages props={repo.language_list} />
          </div>

          <div className="card-information">
            <h2 className="repo-description">{repo.description}</h2>
          </div>

          <a
            className="card-button"
            href={repo.svn_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to Repository
          </a>
        </div>
      ));
    };

    if (process.env.NODE_ENV === "production") {
      fetch("https://api.github.com/users/evansuslovich/repos")
        .then((res) => res.json())
        .then(
          (repos) => setRepoData(createRepoCards(repos)),
          (error) => console.log(error),
        );
    } else {
      // testing and development
      setRepoData(createRepoCards(fakeGithubData));
    }
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <PortfolioIntro setShowPortfolio={setShow} showPortfolio={show} />
      {show && <div className="card-display">{repoData}</div>}
    </div>
  );
}
