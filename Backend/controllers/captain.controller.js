const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');
const { validationResult } = require('express-validator');

// Utils
const extractToken = (req) =>
    req.cookies.token || req.headers.authorization?.split(' ')[1];

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const newCaptain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });

        const token = newCaptain.generateAuthToken();

        res.status(201).json({
            message: 'Captain registered successfully',
            token,
            captain: {
                id: newCaptain._id,
                firstname: newCaptain.firstname,
                lastname: newCaptain.lastname,
                email: newCaptain.email,
                vehicle: {
                    color: newCaptain.color,
                    plate: newCaptain.plate,
                    capacity: newCaptain.capacity,
                    vehicleType: newCaptain.vehicleType,
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain || !(await captain.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();

        res.cookie('token', token, { httpOnly: true, secure: true }); // secure for production
        res.status(200).json({
            message: 'Login successful',
            token,
            captain: {
                id: captain._id,
                firstname: captain.firstname,
                lastname: captain.lastname,
                email: captain.email,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        if (!req.captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        res.status(200).json({
            captain: {
                id: req.captain._id,
                firstname: req.captain.firstname,
                lastname: req.captain.lastname,
                email: req.captain.email,
                vehicle: {
                    color: req.captain.color,
                    plate: req.captain.plate,
                    capacity: req.captain.capacity,
                    vehicleType: req.captain.vehicleType,
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports.logoutCaptain = async (req, res, next) => {
    try {
        const token = extractToken(req);

        if (token) {
            await blacklistTokenModel.create({ token });
        }

        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        next(err);
    }
};
