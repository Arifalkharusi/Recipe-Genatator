import React, { useState } from "react";

const Food = (props) => {
  const [foodData, setFoodData] = useState(``);

  const ingredients = props.food;
  const apiKey = "fc7d17081b264ef79b285f0b147fd2c0";
  let number = 3;

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&ranking=1&apiKey=${apiKey}`;

  const foodFunc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      });
  };

  return (
    <div>
      <button className="generate" onClick={foodFunc}>
        Get Recipes
      </button>
      {foodData[0]
        ? foodData.map((x) => (
            <div className="card">
              <div className="card-img-top">
                <img src={x.image} alt="Recipe Name" />
              </div>
              <div className="card-body">
                <h4 className="card-title">{x.title}</h4>
                <strong>Instructions:</strong>
                <ol>
                  {x.usedIngredients.map((i) => (
                    <li>{i?.original}</li>
                  ))}
                  {x.missedIngredients.map((i) => (
                    <li>{i?.original}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Food;
