import React, { useState } from "react";
import "./index.css";



function App() {
  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");



  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, {taskName: task, id: counter}])
    console.log(tasks);
    console.log(counter);
    setCounter(counter + 1);
    setTask("");
  }

  const deleteTask = (id) => {
    console.log(id);
    const filterArray = tasks.filter((el) => el.id !== id);
    setTasks(filterArray)
    
  }

  const editOption = (el) => {
    setEdit(true);
    setTask(el.taskName)
    setId(el.id);
    console.log(el, el.id)
  }

  const editTask = (e) => {
    e.preventDefault();
    
    const editArray = tasks.map((el) => 
      el.id === id ? {id, taskName: task} : el
    )

    setTasks(editArray);
    editOption(false);
    setTask("")
    setId("")
  }







  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Crud</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-md-8">
            <h4 className="text-center">Task List</h4>
            <ul className="list-group">
                {
                  tasks.map((el) => (

                    <li key={el.id} className="list-group-item">
                    <span className="lead">{el.taskName}</span>
                    <button onClick={() => deleteTask(el.id)}  className="btn btn-danger btn-sm float-end mx-2">
                      Delete Task
                    </button>
                    <button onClick={() => editOption(el)} className="btn btn-warning btn-sm float-end mx-2">
                      Edit Task
                    </button>
                  </li>


                  ))
                }
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h4 className="text-center">{edit ? "Edit Task" : "Add Task"}</h4>

            <form onSubmit={edit ? editTask : addTask}>
              <input
                type="text"
                placeholder="Add a new task"
                className="form-control mb-2"
                onChange={(e) => {setTask(e.target.value)}}
                value={task}
                
              />
              <div className="d-grid gap-2">
                {
                  edit ? (<button className="btn btn-warning" type="submit">Edit Task</button>) : (<button className="btn btn-dark" type="submit">Add Task</button>)
                }
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
