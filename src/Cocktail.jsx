const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, onSelect } =
    props;
  return (
    <>
      <li className="list-element" id={idDrink}>
        <img className="img" src={strDrinkThumb} alt={strDrink} />
        <div className="info-box">
          <p className="name">{strDrink}</p>
          <div>
            <p className="glass">{strGlass}</p>
            <p className="alcoholic">{strAlcoholic}</p>
          </div>
          <button className="btn-details" onClick={onSelect}>
            Details
          </button>
        </div>
      </li>
    </>
  );
};
export default Cocktail;
