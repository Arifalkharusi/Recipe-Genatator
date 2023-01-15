import React, { useState } from "react";
import Input from "./Input";
import Todo from "./todo";
import Hint from "./Hint";
import Food from "./Food";
import "./style.css";

function App() {
  const [data, setDate] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const add = (text) => {
    setDate((prev) => [...prev, text]);
    setIngredients((prev) => [...prev, text.text]);
  };

  const deleteTodo = (index) => {
    data.splice(index, 1);
    setDate((prev) => [...prev]);

    ingredients.splice(index, 1);
    setIngredients((prev) => [...prev]);
  };

  return (
    <div className="container">
      <h1>RECIPE GENERATOR</h1>
      <Input onAdd={add} />
      {!data.length > 0 ? <Hint /> : null}
      {data.map((x, i) => (
        <Todo text={x.text} key={x.key} index={i} delete={deleteTodo} />
      ))}
      <Food food={ingredients} />
    </div>
  );
}

export default App;
