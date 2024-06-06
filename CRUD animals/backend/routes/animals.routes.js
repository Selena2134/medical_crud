const express = require('express');
const animalsController = require('../controllers/animals.controllers');

const router = express.Router();

router.get('/animals', animalsController.index);
router.get('/animals/:id', animalsController.show);
router.post('/animals', animalsController.store );
router.put('/animals/:id', animalsController.update);
router.delete('/animals/:id', animalsController.delete);

module.exports = router;