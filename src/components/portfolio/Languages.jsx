import React, { useEffect, useState } from "react";
import "../../components/portfolio/portfolio.scss";

export default function Languages({ props }) {
  const [listOfLanguages, setLanguages] = useState([]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      fetch(props)
        .then((res) => res.json())
        .then(
          (languages) => {
            const result = Object.keys(languages).map((language) => language);
            const languageList = (
              <ul className="language-list">
                {result.map((language, index) => (
                  <li className="language" key={index}>
                    {language}
                  </li>
                ))}
              </ul>
            );
            setLanguages(languageList);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      const languageList = (
        <ul className="language-list">
          {props.map((language, index) => (
            <li className="language" key={index}>
              {language}
            </li>
          ))}
        </ul>
      );
      setLanguages(languageList);
    }
  }, [props]);

  return listOfLanguages;
}
