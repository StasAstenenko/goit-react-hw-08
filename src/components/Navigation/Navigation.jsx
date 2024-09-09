import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthLoggedIn } from "../../redux/auth/selectors";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  return (
    <>
      <NavLink to="/" className={isActive}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={isActive}>
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
