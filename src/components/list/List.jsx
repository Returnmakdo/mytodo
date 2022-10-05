import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    // console.log(todoId); //-> 누른 카드의 id값
    const newTodos = todos.filter((todo) => {
      // console.log(todo); //-> 현재 리스트있는 전체 배열
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">해야할 일.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">완료..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
export default List;
