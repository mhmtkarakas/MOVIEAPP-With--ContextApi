import React, { useState } from "react";
import ResultCard from './ResultCard';

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=18include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors){
          setResults(data.results)
        }else{
          setResults([]);
        }
      });
  }
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=18include_adult=false&query=${e.target.value}`)
  //   .then(response =>{
  //    if(!response.ok){
  //      throw new Error(`Http error: status: ${response.status}`)
  //    }
  //    return response.json();
  //   })
  //   .then(data =>{
  //    console.log(data);;
  //   } )
  //  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          <div className="titles">
            <h1>Hos Geldiniz</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              onChange={onChange}
              value={query}
              placeholder="Film,dizi,kisi ara..."
            />
          </div>
         {results.length > 0 && (
          <ul className="results">
              {results.map((movie)=>(
            <li key={movie.id}><ResultCard movie={movie} /></li>
           ))}
          </ul>
         )}
        </div>
      </div>
    </div>
  );
};

export default Add;
