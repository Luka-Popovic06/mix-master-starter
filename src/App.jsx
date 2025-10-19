import React, { useState, useEffect } from "react";
import axios from "axios";
import Cocktail from "./Cocktail";
import CocktailInfoCard from "./CocktailInfoCard";
import "./App.css";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(false);
  const [searchValue, setSearchValue] = useState("a");
  const fetchCocktails = (query) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((cocktails) => {
        setCocktails(cocktails.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCocktails(searchValue);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCocktails(searchValue);
  };
  return (
    <>
      {!selectedCocktail && (
        <form className={`search-form `} onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-input"
            id="text-input"
            name="text-input"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      )}
      <ul className={`list ${!selectedCocktail ? "" : "hidden"}`}>
        {cocktails.map((cocktail) => {
          return (
            <Cocktail
              key={cocktail.idDrink}
              {...cocktail}
              onSelect={() => setSelectedCocktail(cocktail.idDrink)}
            />
          );
        })}
      </ul>
      {selectedCocktail ? (
        <CocktailInfoCard
          cocktailId={selectedCocktail}
          onSelect={() => setSelectedCocktail(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
