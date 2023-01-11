import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Portfolio() {
    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState();

    async function repoDataURL() {
        //Get repo data about github user
        await fetch("https://api.github.com/users/evansuslovich/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    const list = result.map((item) => (
                        <div className="text-center">
                            <a href={item.svn_url}>
                                {item.name}
                            </a>
                        </div>
                    ));
                    setRepoData(list);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

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
                        <div className="text-center">
                            <a href={item.svn_url}>
                                {item.name}
                            </a>
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
        <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>{githubUsername}</Card.Title>

                   {repoData}
                </Card.Body>
            </Card>
        </div>
    );
}

