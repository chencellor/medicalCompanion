const express = require('express');
const router = express.Router();
const { Hospital } = require('../models');

// 获取所有医院
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 获取单个医院
router.get('/:id', async (req, res) => {
  try {
    const hospital = await Hospital.findByPk(req.params.id);
    if (hospital == null) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json(hospital);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;