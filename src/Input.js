import React from "react";

let num = 0;

const Input = (props) => {
  const addTodo = (e) => {
    e.preventDefault();

    const valueEntered = e.target[0].value === "";

    if (valueEntered) alert("fill Text");

    if (!valueEntered) {
      props.onAdd({
        key: num,
        text: e.target[0].value,
      });
      num++;
      e.target[0].value = "";
    }
  };

  return (
    <form onSubmit={addTodo} className="nav">
      <input type="text" id="inputText" placeholder="Item"></input>
      <button type="submit" id="add">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default Input;
