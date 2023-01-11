import "./portfolio.scss"

import { useEffect } from "react"

export default function Portfolio() {


    useEffect( () => {
        fetch("https://api.github.com/users/evansuslovich/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, )

    // useEffect(() => {
    //     fetch("https://api.github.com/users/evansuslovich")
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         );
    // }, []);


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Projects</li>
                <li>Art</li>
                <li>Club</li>
                <li>Writing</li>
            </ul>

          

        </div>
    )
}
