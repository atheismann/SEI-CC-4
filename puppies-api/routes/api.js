const express = require('express');
const router = express.Router();
const puppiesController = require('../controllers/api/puppies');

/* GET users listing. */
router.get('/puppies', puppiesController.index);
router.post('/puppies', puppiesController.create);
router.get('/puppies/:id', puppiesController.show);
router.put('/puppies/:id', puppiesController.update);
router.delete('/puppies/:id', puppiesController.delete);

module.exports = router;