import React from "react";

const Todo = (props) => {
  const deleteHandler = () => {
    props.delete(props.index);
  };

  const completeHandler = (e) => {
    const todo = e.target;
    !todo.classList.contains("green")
      ? todo.classList.add("green")
      : todo.classList.remove("green");
  };

  return (
    <div
      className="main"
      onDoubleClick={deleteHandler}
      onClick={completeHandler}
    >
      <div className="textT">{props.text}</div>
      <div className="textD">{props.date}</div>
    </div>
  );
};

export default Todo;
