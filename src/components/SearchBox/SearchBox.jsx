import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (searchEvent) => {
    dispatch(setFilterValue(searchEvent.target.value));
  };

  return (
    <form className={css.form}>
      <label htmlFor="find">Find contacts by name</label>
      <input
        type="text"
        id="find"
        onChange={handleFilter}
        value={filterValue}
        required
      />
    </form>
  );
};

export default SearchBox;
