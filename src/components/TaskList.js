import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <TaskItem
      title={props.title}
      id={props.id}
      description={props.description}
      date={props.date}
    />
  );
};

export default TaskList;
