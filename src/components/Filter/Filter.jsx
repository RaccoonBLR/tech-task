import { Label, Select } from './Filter.styled';

export const Filter = ({ setFilter }) => {
  return (
    <div>
      <Label htmlFor="cardStatus-select">Choose a filter:</Label>
      <Select
        name="filter"
        id="cardStatus-select"
        onChange={evt => setFilter(evt.target.value)}
      >
        <option value="all">all</option>
        <option value="follow">follow</option>
        <option value="followings">followings</option>
      </Select>
    </div>
  );
};
