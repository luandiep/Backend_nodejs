'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
router.post('/event', eventControll.addEvent);



module.exports = {
    routes: router
}