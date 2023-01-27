import { Label, Input, Board } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onHandelChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Board>
      <Label htmlFor="filter">Find contacts:</Label>
      <Input
        onChange={onHandelChange}
        type="text"
        name="filter"
        value={value}
        id="filter"
        placeholder="Search"
      />
    </Board>
  );
};

export default Filter;
