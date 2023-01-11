import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
                    console.log(result);
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
                    const list = result.map((item) => (
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary">Go to Repository</Button>
                                    </div>
                            </div>
                        </div>
                    ));
                    setRepoData(list);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);



    return (

        <div>
            {repoData}
        </div>

    );
}







                // <div>
                //     <a href={item.svn_url}>
                //         <h1>{item.name}</h1>
                //     </a>
                //     <h5>{item.description}</h5>
                // </div>