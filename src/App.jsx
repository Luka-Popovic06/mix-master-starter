import React, { useState, useEffect } from "react";
import axios from "axios";
import Cocktail from "./Cocktail";
import CocktailInfoCard from "./CocktailInfoCard";
import "./App.css";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(false);
  const [searchValue, setSearchValue] = useState("a");
}

export default App;
