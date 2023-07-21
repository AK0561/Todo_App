import React,{useState,useRef} from 'react';
import './App.css';

function App() {
  const [todoList,setTodolist] = useState([]);
  const [currentTask,setCurrentTask] =useState("");
  const inputTask =useRef(null)
  const addTask = () => {
    setTodolist([...todoList, { task : currentTask , completed : false }]);
    inputTask.current.value='';
    setCurrentTask('');
  }
  const deleteTask = (taskToDelete) => {
   setTodolist(
    todoList.filter((task) => {
      return task.task !== taskToDelete;
    })
   )
  }
  const completeTask = (taskToComplete) => 
  {
    setTodolist(
      todoList.map((task)=>
      {
        return task.task === taskToComplete
        ? { task : taskToComplete , completed : true} 
        : { task : task.task , completed : task.completed ? true : false };
      })
    );
  };
   return (
    <div className="App">
    <h1>  Todo List </h1>
    <div>
      <input type="text" placeholder='Task...' onKeyDown ={(e) => {if(e.keyCode ===13) addTask();}}onChange={(e) => setCurrentTask(e.target.value)} ref={(inputTask)}></input>
      <button onClick={addTask}>Add a task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((value,key)=>
        { 
          return (
          <div id="task">
          <li key={key}>{value.task}</li>
          <button onClick={()=>{completeTask(value.task)}}>Completed</button>
          <button onClick={()=>{deleteTask(value.task)}}>X</button>
          {value.completed ? <h1>Task Completed</h1> : <h1>Task is Incomplete</h1>}
          </div>
          );
        })
      }
      </ul>
    </div>
);
}

export default App;
