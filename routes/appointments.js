const express = require('express');
const router = express.Router();
const { Appointment } = require('../models');

// 创建预约
router.post('/', async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 获取用户的所有预约
router.get('/user/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ where: { patientId: req.params.userId } });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;