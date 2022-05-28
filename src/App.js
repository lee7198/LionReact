import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  // useState를 사용하여 상태변수? 선언+초기화
  const setNumber = (e) => {
    setNum(num + e);
  };

  const [myList, setMylist] = useState([
    {
      text: "운동하기",
      isDone: false,
    },
  ]);

  const [newList, setNewList] = useState("");
  const handleChange = ({ target: { value } }) => setNewList(value);
  const addTodo = (text) => {
    const newTodos = [...myList, { text }];
    setMylist(newTodos);
  };

  return (
    <div className="App">
      <h1>COUNTING NUMBER</h1>
      <h3>{num}</h3>
      <button
        onClick={() => {
          setNumber(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(-1);
        }}
      >
        -
      </button>

      <h1>TODOLIST</h1>
      <form
        onSubmit={() => {
          addTodo(newList);
        }}
      >
        <input
          type="text"
          placeholder="todolist"
          value={newList}
          onChange={handleChange}
        />
        <button type="submit">write</button>
      </form>
      <h3>my list</h3>
      {myList.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
}

export default App;
