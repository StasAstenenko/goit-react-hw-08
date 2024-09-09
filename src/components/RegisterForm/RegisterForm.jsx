import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./RegisterForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";
import { isRegister } from "../../redux/auth/operations";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Must be at least 2 characters")
    .max(50, "Must be less than 50 characters"),
  email: Yup.string().email("Incorrect mail").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters")
    .max(50, "Must be less than 50 characters"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function handleSubmit(values) {
    dispatch(isRegister(values));
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor="name" className={css.contactFormTitle}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id="name"
          className={css.contactFormInput}
        />
        <ErrorMessage
          name="name"
          component="label"
          className={css.contactFormError}
        />
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

        <button
          type="submit"
          aria-label="Sign Up"
          className={css.contactBtnAdd}
        >
          Sign Up
        </button>
        {error && <p>Some error...</p>}
      </Form>
    </Formik>
  );
};

export default RegisterForm;
