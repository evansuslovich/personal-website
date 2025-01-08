import React, { useEffect, useState } from "react";

import '../../components/portfolio/portfolio.scss'

export default function Languages(props) {

  const [listOfLanguages, setLanguages] = useState([]);


  useEffect(() => {
    // fetch(props.props)
      // .then((res) => res.json())
      // .then(
        // (languages) => {
          // let result = [];
          // Object.keys(languages).forEach(language => result.push(language))
          const languageList = 

          <ul className="language-list">
            {props.props.map((language, index) => (
              <li className="language" key={index}>
                {language}
              </li>
            ))}
          </ul>

  
          setLanguages(languageList)
        // },
        // (error) => {
          // console.log(error);
        // }
      // )
  }, [props.props])

  return listOfLanguages
}