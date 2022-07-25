import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [addTask, setAddTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(newData){
    setAddTask([...addTask, newData])
    console.log(addTask)
  }

  function handleDeleteTask(data){
    setAddTask(addTask.filter((task) => task.text !== data))
  }

  const tasksLists = addTask.filter((task) => {
    return category === "All" || task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm onTaskFormSubmit={ handleAddTask}/>
      <TaskList onDelete={handleDeleteTask} tasks={tasksLists} />
    </div>
  );
}

export default App;
