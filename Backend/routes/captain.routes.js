const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

const validateRegistration = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  body('fullname.firstname')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  body('vehicle.color')
    .isLength({ min: 3 })
    .withMessage('Color must be at least 3 characters long'),

  body('vehicle.plate')
    .isLength({ min: 3 })
    .withMessage('Plate must be at least 3 characters long'),

  body('vehicle.capacity')
    .isInt({ min: 1 })
    .withMessage('Capacity must be at least 1'),

  body('vehicle.vehicleType')
    .isIn(['car', 'motorcycle', 'auto'])
    .withMessage('Invalid vehicle type')
];

const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// Routes
router.post('/register', validateRegistration, captainController.registerCaptain);
router.post('/login', validateLogin, captainController.loginCaptain);
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
