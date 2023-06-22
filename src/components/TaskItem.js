import React, { useContext, useState } from "react";
import completedImage from "../Assets/completed-tick.png";
import Card from "../UI/Card";
import "./TaskItem.css";
import TaskContext from "../Store/context";
import TaskDate from "./TaskDate";

const TaskItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const taskCtx = useContext(TaskContext);

  const completedButtonHandler = () => {
    setIsCompleted(!isCompleted);
  };

  const deleteButtonHandler = () => {
    taskCtx.removeItem(props.id);
  };

  const completedButtonClass = isCompleted ? "button-completed" : "";

  return (
    <Card className="task-item-wrapper">
      <div className="information-div">
        <div className="title-description-div">
          <div className="title-div">
            <p>{props.title}</p>
            {isCompleted && <img src={completedImage} />}
          </div>
          <div className="description-div">
            <p>{props.description} </p>
            {isCompleted && <img src={completedImage} />}
          </div>
        </div>
        <div className="date-div">
          <TaskDate date={props.date} />
        </div>
      </div>

      <div className="button-div">
        <button
          className={`complete-button ${completedButtonClass}`}
          onClick={completedButtonHandler}
          disabled={isCompleted}
        >
          Mark as complete
        </button>
        <button className="delete-button" onClick={deleteButtonHandler}>
          Delete Task
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
