import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login" className={isActive}>
        Login
      </NavLink>
      <NavLink to="/register" className={isActive}>
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
