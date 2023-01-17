import { ConnectingAirportsOutlined, SignalCellularNoSimOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./portfolio.scss"

export default function Portfolio() {
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState();
    const [languagesUsed, setLanguages] = useState(); 

    useEffect(() => {
        fetch("https://api.github.com/users/evansuslovich")
            .then((res) => res.json())
            .then(
                (result) => {
                    setGitHubUsername(result.login);
                },
                (error) => {
                    console.log(error);
                }
            );
        fetch("https://api.github.com/users/evansuslovich/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    const list = result.map((item) => (

                        <div className="card" key={item.name} >

                            <div className="card-header">
                                <h1 className="repo-title">{item.name}</h1>
                          
                                <div className="card-languages">
                                    {getLanguages(item)}
                                </div>
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
            );
    }, []);

    function getLanguages(item) {
        let result = [];

        fetch(item.languages_url)
            .then((res) => res.json())
            .then((languages) => {
                Object.keys(languages).forEach(key => result.push(key))

                const languageList = result.map((langauge) =>
                    <li key={langauge}>
                        {langauge}
                    </li>
                )

                setLanguages(languageList)
            },
                (error) => {
                    console.log(error);
                }
            )
            console.log(languagesUsed)
            return languagesUsed;
    }


    return (

        <div className="card-display">
            {repoData}
        </div>

    );
}




