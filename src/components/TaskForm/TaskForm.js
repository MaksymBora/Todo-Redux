import { addTask } from 'Redux/taskSlice';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { Field, TodoForm } from './TaskForm.styled';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <TodoForm onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </TodoForm>
  );
};
