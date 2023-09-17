import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Wrapper, Text, Btn, Checkbox } from './Task.styled';
import { deleteTask, toggleCompleted } from 'Redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <Btn onClick={handleDelete}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
