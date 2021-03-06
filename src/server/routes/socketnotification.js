const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

const socketnotificationController = require('../controllers/socketnotification');

/**
 * @route /api/notifications/
 * @description Get the list of notifications
 * @access Private
 **/
router.post('/get', middleware(socketnotificationController.index));

/**
 * @route /api/notifications/
 * @description Store new notification resource
 * @access Private
 **/
router.get('/:id', middleware(socketnotificationController.edit));

router.post('/:id', middleware(socketnotificationController.updateAll));

/**
 * @route /api/notifications/:id
 * @description Update the notification resource
 * @access Private
 **/
router.post('/', middleware(socketnotificationController.update));

/**
 * @route /api/notifications/
 * @description Delete the notification resource
 * @access Private
 **/
router.post('/delete/:id', middleware(socketnotificationController.delete));

router.post('/deleteall', middleware(socketnotificationController.deleteAll));

module.exports = router;
