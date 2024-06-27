import React, { useEffect, useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [meaning, setMeaning] = useState([]);
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then((response) => response.json())
      .then((data) => setMeaning(data[0].meanings[0].definitions[0].definition))
      .catch((error) => {setErr("Sorry pal, we couldn't find definitions for the word you were looking for.", error)});
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Your little Dictionary</h1>
          <div className="sec">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
          <p>{meaning && meaning.length > 0 ? meaning : err}</p>
        </div>
      </div>
    </>
  );
};

export default Dictionary;
