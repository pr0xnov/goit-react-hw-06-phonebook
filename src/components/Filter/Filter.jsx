import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { filterContacts, getFilter } from 'redux/Contacts/slice';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <FilterLabel>
      Filter
      <FilterInput
        type="text"
        value={filter}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

export default SearchFilter;
