const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blacklistToken.model');

// ======== Utility Functions ========

const getTokenFromRequest = (req) => {
  return req.cookies.token || req.headers.authorization?.split(' ')[1] || null;
};

const isTokenBlacklisted = async (token) => {
  return await blackListTokenModel.findOne({ token });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// ======== Middleware Functions ========

module.exports.authUser = async (req, res, next) => {
  const token = getTokenFromRequest(req);

  if (!token || await isTokenBlacklisted(token)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    const user = await userModel.findById(decoded._id);
    if (!user) throw new Error('User not found');

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = getTokenFromRequest(req);

  if (!token || await isTokenBlacklisted(token)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) throw new Error('Captain not found');

    req.captain = captain;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
