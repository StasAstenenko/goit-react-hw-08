import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";
import { isLogin } from "../../redux/auth/operations";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Incorrect mail").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters")
    .max(50, "Must be less than 50 characters"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    email: "",
    password: "",
  };

  function handleSubmit(values) {
    dispatch(isLogin(values));
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor="email" className={css.contactFormTitle}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id="email"
          className={css.contactFormInput}
        />
        <ErrorMessage
          name="email"
          component="label"
          className={css.contactFormError}
        />
        <label htmlFor="password" className={css.contactFormTitle}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.contactFormInput}
        />
        <ErrorMessage
          name="password"
          component="label"
          className={css.contactFormError}
        />

        <button type="submit" className={css.contactBtnAdd}>
          Login
        </button>
        {error && <p>Some error...</p>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
