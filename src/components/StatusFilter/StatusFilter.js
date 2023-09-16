import { statusFilters } from 'Redux/constans';
import { setStatusFilter } from 'Redux/filtersSlice';
import { getStatusFilter } from 'Redux/selectors';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
