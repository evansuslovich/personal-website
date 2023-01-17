import { useEffect, useState } from "react";
import Languages from "./Languages";
import "./portfolio.scss"

export default function Portfolio() {
  const [repoData, setRepoData] = useState();


  useEffect(() => {
    fetch("https://api.github.com/users/evansuslovich/repos")
      .then((res) => res.json())
      .then(
        (result) => {

          const list = result.map((item, index) => (
            <div className="card" key={item.name} >
              <div className="card-header">
                <h1 className="repo-title">{item.name}</h1>

                <Languages props={item.languages_url} />
              </div>

              <div className="card-information">
                <h2 className="repo-description">{item.description}</h2>
              </div>

              <a className="card-button" href={item.svn_url} rel="noopener noreferrer" target="_blank">Go to Repository</a>

            </div >
          ));

          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])


  return (

    <div className="card-display">
      {repoData}
    </div>

  );
}




