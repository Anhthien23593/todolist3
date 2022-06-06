import React from "react";
import Header from "./components/Header";
import AddTask from "./components/add-task-wrapper/AddTask";
import ListTask from "./components/list-task/ListTask";
import Hr from "./components/Hr/hr";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header title="To Do List Application" />
      <AddTask />
      <Hr />
      <ListTask />
      <Hr />
      <ListTask />
      <Hr />
      <ListTask />
      <Hr />
      <ListTask />
      <Hr />
      <ListTask />
      <Hr />
      <Footer />
    </div>
  );
}
