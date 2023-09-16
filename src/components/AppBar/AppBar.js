import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Section, Title, Wrapper } from './AppBar.styled';

export const AppBar = params => {
  return (
    <Wrapper>
      <Section>
        <Title>Task</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
