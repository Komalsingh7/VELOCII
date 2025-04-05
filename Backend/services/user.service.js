const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error('Firstname, email, and password are required');
  }

  try {
    const newUser = new userModel({
      fullname: {
        firstname: firstname.trim(),
        lastname: lastname?.trim() || ''
      },
      email: email.toLowerCase().trim(),
      password
    });

    return await newUser.save();
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};
