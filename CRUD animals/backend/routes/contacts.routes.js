const express = require('express');
const contactsController = require('../controllers/contacts.controllers');

const router = express.Router();

router.get('/contacts', contactsController.index);
router.get('/contacts/:id', contactsController.show);
router.post('/contacts', contactsController.store);
router.put('/contacts/:id', contactsController.update);
router.delete('/contacts/:id', contactsController.delete);

module.exports = router;