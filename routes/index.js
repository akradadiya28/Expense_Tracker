const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.defaultController);
router.post('/add', controller.addController);
router.get('/editController/:id', controller.editController);
router.post('/updateController/:id', controller.updateController);
router.get('/deleteController/:id', controller.deleteController);

module.exports = router; 