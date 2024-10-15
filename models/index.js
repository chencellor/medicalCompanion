const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

const Hospital = require('./Hospital')(sequelize);
const Doctor = require('./Doctor')(sequelize);
const Appointment = require('./Appointment')(sequelize);

// 设置关联关系
Doctor.belongsTo(Hospital);
Hospital.hasMany(Doctor);

Appointment.belongsTo(Doctor);
Doctor.hasMany(Appointment);

module.exports = {
  sequelize,
  Hospital,
  Doctor,
  Appointment
};