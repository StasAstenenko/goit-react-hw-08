import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div className={css.container}>
      <div className={css.par}>
        <p>Name: {user.name}</p>
        <p>Mail: {user.email}</p>
      </div>
      <button
        className={css.logOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
