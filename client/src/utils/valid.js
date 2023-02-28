const valid = ({ email, phone, fullname, username, password }) => {
  const err = {};

  if (!email) {
    err.email = "Please add your email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!phone) {
    err.phone = "Please add your phone.";
  } else if (phone.length < 10) {
    err.phone = "Phone must be at least 12 numbers.";
  }

  if (!fullname) {
    err.fullname = "Please add your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name is up to 25 characters long.";
  }

  if (!username) {
    err.username = "Please add your user name.";
  } else if (username.replace(/ /g, "").length > 25) {
    err.username = "User name is up to 25 characters long.";
  }

  if (!password) {
    err.password = "Please add your password.";
  } else if (password.length < 6) {
    err.password = "Password must be at least 6 characters.";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default valid;
