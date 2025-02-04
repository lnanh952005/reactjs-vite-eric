/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState('');

  const { addNewTodo } = props;
  // them state luu gia tri khi nhap
  // ===============================
  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="new todo"
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          if (valueInput != null && valueInput != '') {
            addNewTodo(valueInput);
            setValueInput("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoNew;
