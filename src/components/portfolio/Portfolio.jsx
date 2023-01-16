import { useEffect, useState } from "react";
import "./portfolio.scss"

export default function Portfolio() {
    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState();

    useEffect(() => {
        fetch("https://api.github.com/users/evansuslovich")
            .then((res) => res.json())
            .then(
                (result) => {
                    setAvatarURL(result.avatar_url);
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

                    // result.map((item) => (
                    //     fetch(item.languages_url)
                    //         .then((res) => res.json())
                    //         .then(
                    //             (url) => {
                    //                 console.log(url)
                    //             },
                    //             (error) => {
                    //                 console.log(error);
                    //             }
                    //         )))




                    const list = result.map((item) => (

                        < div className="card" key={item.name} >

                            <div className="card-header">
                                <h1 className="repo-title">{item.name}</h1>
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



    return (

        <div className="card-display">
            {repoData}
        </div>

    );
}





{/* <div class="card">
                <div className="card-body">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.description}
                </Card.Text>
                <Button href={item.svn_url} target="_blank" variant="primary">Go to Repository</Button>
                </div>
            </div> */}


            // <div>
            //     <a href={item.svn_url}>
            //         <h1>{item.name}</h1>
            //     </a>
            //     <h5>{item.description}</h5>
            // </div>