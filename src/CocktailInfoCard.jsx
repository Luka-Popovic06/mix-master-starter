import React, { useState, useEffect } from "react";
import axios from "axios";

const CocktailInfoCard = (props) => {
  const { cocktailId, onSelect } = props;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      )
      .then((res) => setCocktail(res.data.drinks[0]))
      .catch((error) => console.log(error));
  }, [cocktailId]);

  if (!cocktail) return null;

  return (
    <div className="info-card">
      <img
        className="info-card-img"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className="info-mini-box">
        <p>
          <span className="p">Name:</span>
          {cocktail.strDrink}
        </p>
        <p>
          <span className="p">Category:</span>
          {cocktail.strCategory}
        </p>
        <p>
          <span className="p">Alcoholic:</span>
          {cocktail.strAlcoholic}
        </p>
        <p>
          <span className="p">Glass:</span>
          {cocktail.strGlass}
        </p>
        <p>
          <span className="p">Ingredient:</span>
          {cocktail.strIngredient1}, {cocktail.strIngredient2},
          {cocktail.strIngredient3}
        </p>
        <p>
          <span className="p">Instructions:</span>
          {cocktail.strInstructions}
        </p>
        <button className="back-home-btn" onClick={onSelect}>
          Back Home
        </button>
      </div>
    </div>
  );
};

export default CocktailInfoCard;
