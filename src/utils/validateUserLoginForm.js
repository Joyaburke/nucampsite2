export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length < 6) {
    errors.userName = "Must be 6 characters or more.";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less.";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 15 characters or more.";
  }

  return errors;
};
