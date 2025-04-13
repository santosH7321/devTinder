import validator from "validator";

export const validateSignupData = (req) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName && !lastName) {
    throw new Error("Name is not valid");
  } else if (firstName.length < 3 || firstName.length > 20) {
    throw new Error("Name length should be between 3 and 20");
  } else if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }
};

export const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "email",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );
  return isEditAllowed;
};

