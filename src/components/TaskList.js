import React, {useState} from "react";
import Task from "./Task";

// import { TASKS, CATEGORY } from "../data";

function TaskList({tasks, onDelete}) {



  const taskList = tasks.map((task) => {
    return <Task  key={task.text} text={task.text} category={task.category} onDelete={onDelete} />
  })



  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
