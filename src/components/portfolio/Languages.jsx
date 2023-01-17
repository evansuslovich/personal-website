import React, { useEffect, useState } from "react";

import '../../components/portfolio/portfolio.scss'

export default function Languages(props) {


  const [listOfLanguages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(props.props)
      .then((res) => res.json())
      .then(
        (languages) => {
          let result = [];

          Object.keys(languages).forEach(language => result.push(language))

          const languageList = result.map((langauge) =>
            <h1 className="language" key={langauge}>
              {langauge}
            </h1>
          )

          setLanguages(languageList)

        },
        (error) => {
          console.log(error);
        }
      )
  })

  return (
    <div className="language-list">
      {listOfLanguages}
    </div>
  )
}