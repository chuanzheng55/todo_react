import React, { useState } from "react";


// this is the key for the map, if math.random gives the key that's already exists then there will be a bug
function generateId() {
  return Math.random() ;
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // pass todo inside
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <div className="container">
      {/* set control of the component */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New todo"
      ></input>

      <button className="submit-button" onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => {
          return (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
