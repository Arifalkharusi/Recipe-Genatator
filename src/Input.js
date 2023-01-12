import React from "react";

let num = 0;

const Input = (props) => {
  const addTodo = (e) => {
    e.preventDefault();

    const valueEntered = e.target[0].value === "" || e.target[1].value === "";

    if (e.target[0].value === "") alert("fill Text");
    if (e.target[1].value === "") alert("fill Date");

    if (!valueEntered) {
      props.onAdd({
        key: num,
        text: e.target[0].value,
        date: e.target[1].value,
      });
      num++;
      e.target[0].value = e.target[1].value = "";
    }
  };

  return (
    <form onSubmit={addTodo} className="nav">
      <input type="text" id="inputText"></input>
      <input type="date" id="inputDate"></input>
      <button type="submit" id="add">
        +
      </button>
    </form>
  );
};

export default Input;
