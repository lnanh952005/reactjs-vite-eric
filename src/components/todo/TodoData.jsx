/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  const data = todoList.map((e) => {
    return (
      <div className="todo-item" key={e.id}>
        <div>{`${e.id} ${e.name}`}</div>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert(`deleted todo: ${e.name}`);
            deleteTodo(e.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  // ==============================
  return <div className="todo-data">{data}</div>;
};

export default TodoData;
