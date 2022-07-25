import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
   const todoListTitle = "What to learn"
   const [tasks, setTasks] = useState<Array<TaskType>>([
      {id: 1, title: "HTML", isDone: true},
      {id: 2, title: "CSS", isDone: true},
      {id: 3, title: "React", isDone: false}
   ])
   const [filter, setFilter] = React.useState<FilterValuesType>("all")

   const removeTask = (taskID: number) => {
      setTasks(tasks.filter(task => task.id !== taskID))
      console.log(tasks)
   }

   const changeFilter = (filter: FilterValuesType) => {
      setFilter(filter)
   }

   let taskForRender;

   switch (filter) {
      case "completed":
         taskForRender = tasks.filter(task => task.isDone)
         break
      case "active":
         taskForRender = tasks.filter(task => !task.isDone)
         break
      default:
         taskForRender = tasks
   }

   return (
      <div className="App">
         <TodoList
            title={todoListTitle}
            tasks={taskForRender}
            removeTask={removeTask}
            changeFilter={changeFilter}
         />
      </div>
   );
}

export default App;
