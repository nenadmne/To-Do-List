import { createContext } from "react";

const DUMMY_DATA = [
    {
      id: "t1",
      title: "Task 1",
      description: "Description for Task 1",
      date: new Date(2023, 5, 22)
    },
    {
      id: "t2",
      title: "Task 2",
      description: "Description for Task 2",
      date: new Date(2023, 5, 21)
    },
    {
      id: "t3",
      title: "Task 3",
      description: "Description for Task 3",
      date: new Date(2023, 5, 20)
    }
  ];
  
const TaskContext = createContext({
    items: DUMMY_DATA,
    addItem: (item)=>{},
    removeItem: (id)=>{}
});

export default TaskContext;