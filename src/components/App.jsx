import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout"
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { getError, getIsLoading } from "Redux/selectors";
import { fetchTasks } from "Redux/operations";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])
  
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
