export const validateUserLoginForm = (values) => {
  const errors = {};
  console.log("validate", values);

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 6) {
    errors.username = "Must be 6 characters or more.";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less.";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 15 characters or more.";
  }

  return errors;
};
