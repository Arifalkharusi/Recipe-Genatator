import React from "react";

const Todo = (props) => {
  const deleteHandler = () => {
    props.delete(props.index);
  };

  return (
    <div className="main" onDoubleClick={deleteHandler}>
      <div className="textT">{props.text}</div>
    </div>
  );
};

export default Todo;
