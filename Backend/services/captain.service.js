const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType
}) => {
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error('Missing required fields');
  }

  try {
    const newCaptain = new captainModel({
      fullname: {
        firstname: firstname.trim(),
        lastname: lastname?.trim() || ''
      },
      email: email.toLowerCase().trim(),
      password,
      vehicle: {
        color: color.trim(),
        plate: plate.trim(),
        capacity,
        vehicleType
      }
    });

    return await newCaptain.save();
  } catch (error) {
    throw new Error('Failed to create captain: ' + error.message);
  }
};
