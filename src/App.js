import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskContext from "./Store/context";
import { useContext, Fragment } from "react";

function App() {
  const taskCtx = useContext(TaskContext);
  const { items } = taskCtx;

  return (
    <Fragment>
      <main>
        <TaskForm />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <TaskList
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
}

export default App;
