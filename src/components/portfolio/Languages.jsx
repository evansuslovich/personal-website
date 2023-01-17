import React, { useEffect, useState } from "react";
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
  })

  return (
    <div >
      {listOfLanguages}
    </div>
  )
}