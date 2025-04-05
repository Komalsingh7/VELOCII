const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: [true, 'Firstname is required'],
      minlength: [3, 'Firstname must be at least 3 characters long'],
      trim: true
    },
    lastname: {
      type: String,
      minlength: [3, 'Lastname must be at least 3 characters long'],
      trim: true
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false
  },
  socketId: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  vehicle: {
    color: {
      type: String,
      required: [true, 'Vehicle color is required'],
      minlength: [3, 'Color must be at least 3 characters long'],
      trim: true
    },
    plate: {
      type: String,
      required: [true, 'Vehicle plate is required'],
      minlength: [3, 'Plate must be at least 3 characters long'],
      trim: true,
      uppercase: true
    },
    capacity: {
      type: Number,
      required: [true, 'Vehicle capacity is required'],
      min: [1, 'Capacity must be at least 1']
    },
    vehicleType: {
      type: String,
      required: [true, 'Vehicle type is required'],
      enum: ['car', 'motorcycle', 'auto']
    }
  },
  location: {
    ltd: {
      type: Number,
      default: null
    },
    lng: {
      type: Number,
      default: null
    }
  }
}, {
  timestamps: true
});

// ===== Instance Methods =====

captainSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  });
};

captainSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// ===== Static Methods =====

captainSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 10);
};

// ===== Model =====

const Captain = mongoose.model('Captain', captainSchema);
module.exports = Captain;
