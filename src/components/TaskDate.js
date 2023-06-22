import "./TaskDate.css";

function TaskDate(props) {
  const date = new Date(props.date);

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="task-date">
      <div className="task-date__month">{month}</div>
      <div className="task-date__year">{day}</div>
      <div className="task-date__day">{year}</div>
    </div>
  );
}

export default TaskDate;
