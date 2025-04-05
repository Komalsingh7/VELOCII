const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    trim: true // Clean leading/trailing whitespace
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 // Automatically delete after 24 hours
  }
}, {
  timestamps: false // Disable auto-created `createdAt/updatedAt` since we handle it manually
});

// Optional: Index for better lookup speed
blacklistTokenSchema.index({ token: 1 });

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
