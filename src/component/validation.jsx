const validation = (formData) => {
  let errors = {};
  if (!formData.email) {
    errors.email = "email is required.";
  }
  if (!formData.username) {
    errors.username = "username is required.";
  }
  if (formData.password == ""){
  alert ("Please enter Password");
}
    
   else if (formData.password == ""){
   alert ("Please enter confirm password");
   }  
 
    else if (formData.confirm_password != formData.password) {
      alert ("\nPassword did not match: Please try again...")
      return false;
    }
    else {
      alert("Password Match: Welcome to Facebook!")
      return true;
    }

  return errors;
};
export default validation;
