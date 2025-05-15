const mongoose = require('mongoose');

const guildShema = mongoose.Schema({
  id: String,
  prefix: { 'type': String, 'default': '!' },
  logChannel: { 'type': String, 'default': '1372459854467301386' }
});

module.exports = mongoose.model('Guild', guildShema);