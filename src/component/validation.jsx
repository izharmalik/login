const validation = (formdata) => {
  let errors = {};
  if (!formdata.email) {
    errors.email = "username is required.";
  }
  if (!formdata.username) {
    errors.username = "username is required.";
  }
  if (!formdata.password) {
    errors.password = "password is required.";
  } else if (formdata.password.length < 5) {
    errors.password = "password must be more then five characters.";
  }
  if (!formdata.cpassword) {
    errors.cpassword = "password is required.";
  } else if (formdata.cpassword.length < 5) {
    errors.cpassword = "password must be more then five characters.";
  }

  return errors;
};
export default validation;
