import React, { useState } from "react";
import Input from "./Input";
import Todo from "./todo";
import Hint from "./Hint";
import "./style.css";

function App() {
  const data = [];

  const [date, setDate] = useState(data);

  const add = (text) => {
    setDate((prev) => [...prev, text]);
  };

  const deleteTodo = (index) => {
    date.splice(index, 1);
    setDate((prev) => [...prev]);
  };

  return (
    <div className="container">
      <Input onAdd={add} />
      {!date.length > 0 ? <Hint /> : ""}
      {date.map((x, i) => (
        <Todo
          text={x.text}
          date={x.date}
          key={x.key}
          index={i}
          delete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
