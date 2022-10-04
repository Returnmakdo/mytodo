import React, { useState } from "react";
import "./style.css";

let number = 3;
function Form({ todos, setTodos }) {
  const init = {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return alert("제목과 내용을 입력하세요");
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(init);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input type="text" name="title" value={todo.title} className="add-input input-body" onChange={onChangeHandler} />
        <label className="form-label">내용</label>
        <input type="text" name="content" value={todo.content} className="add-input" onChange={onChangeHandler} />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
