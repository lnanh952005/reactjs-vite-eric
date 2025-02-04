import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactImage from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoId,setTodoId] = useState(1);

  const addNewTodo = (name) => {
    setTodoList([...todoList,{id:todoId,name:name}])
    setTodoId(todoId + 1);
  }

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((e) => e.id != id);
    setTodoList(newTodoList);
  }

  // =====================================
  return (
    <div className="todo-container">
      <div className="todo-title">todo list</div>
      <TodoNew addNewTodo={addNewTodo} />

      <TodoData todoList={todoList} deleteTodo={deleteTodo} />

      {
        todoList.length !=0 &&
        <div className="todo-image">
          <img src={reactImage} className="logo" alt="" />
        </div>
      }
    </div>
  );
};

export default App;
