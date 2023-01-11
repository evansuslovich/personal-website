import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
                        <Card style={{ width: '15rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ));
                    setRepoData(list);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);



    return (
        <div className="App w-100 min-vh-100">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>{githubUsername}</Card.Title>
                </Card.Body>
            </Card>
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