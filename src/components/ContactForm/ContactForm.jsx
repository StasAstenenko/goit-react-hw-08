import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Must be at least 2 characters")
      .max(50, "Must be less than 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Must be at least 2 characters")
      .max(50, "Must be less than 50 characters")
      .matches(phoneRegExp, "Enter the number in the format 'xxx-xx-xx"),
  });

  function handleSubmit(newContact, actions) {
    dispatch(addContact(newContact));
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
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

        <label htmlFor="number" className={css.contactFormTitle}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id="number"
          className={css.contactFormInput}
        />
        <ErrorMessage
          name="number"
          component="label"
          className={css.contactFormError}
        />

        <button
          type="submit"
          aria-label="Add contact"
          className={css.contactBtnAdd}
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
