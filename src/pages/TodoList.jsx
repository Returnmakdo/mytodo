import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 배워보기",
      content: "너무 어렵다ㅠ",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 배우기",
      content: "state랑 props....",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default TodoList;
