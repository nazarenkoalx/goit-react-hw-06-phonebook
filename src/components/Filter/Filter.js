import { Section } from 'components/Section/Section.styled';
import { Wrapper } from 'components/Wrapper/Wrapper.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Section>
      <Wrapper>
        <label htmlFor="filter">Search contacts by name</label>
        <Input
          name="filter"
          onChange={handleChange}
          placeholder="type contacts name"
        ></Input>
      </Wrapper>
    </Section>
  );
};
