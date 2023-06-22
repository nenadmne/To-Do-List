import TaskContext from "./context";
import { useContext, useReducer } from "react";

const taskReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [action.item, ...state.items];
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
};

const TaskProvider = (props) => {
  const taskCtx = useContext(TaskContext);

  const defaultTaskState = {
    items: taskCtx.items,
  };
  const [cartState, dispatchTaskAction] = useReducer(
    taskReducer,
    defaultTaskState
  );

  const addTaskHandler = (item) => {
    dispatchTaskAction({ type: "ADD", item: item });
  };

  const removeTaskHandler = (id) => {
    dispatchTaskAction({ type: "REMOVE", id: id });
  };

  const taskContext = {
    items: cartState.items,
    addItem: addTaskHandler,
    removeItem: removeTaskHandler,
  };

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
