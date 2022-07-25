import React, {useState} from "react";
// import { v4 as uuid } from "uuid";
 

function NewTaskForm({onTaskFormSubmit}) {

  const [task, setTask] = useState("")
  const [category, setCategory] = useState("All")

  function handleTaskSubmit(e){
    e.preventDefault()


    const newTask ={
      text: task,
      category: category
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Code">Code</option>
          <option value="Misc">Misc</option>

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
