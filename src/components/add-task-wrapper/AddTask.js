import React, { Component } from "react";
import "./AddTask.css";

export default class addtask extends Component {
  render() {
    return (
      <div className="addtask">
        <input
          className="input input-task"
          placeholder="Add new task in here"
        ></input>
        <button className=" btn--plus">+</button>
      </div>
    );
  }
}
