const express = require('express');
const router = express.Router();
const moviesApiController = require('../controllers/api/movies');
const performersApiController = require('../controllers/api/performers');

/* GET users listing. */
router.get('/movies', moviesApiController.index);
router.post('/movies', moviesApiController.create);
router.get('/movies/:id', moviesApiController.show);
router.put('/movies/:id', moviesApiController.update);
router.delete('/movies/:id', moviesApiController.delete);

router.get('/performers', performersApiController.index);
router.post('/performers', performersApiController.create);
router.get('/performers/:id', performersApiController.show);
router.put('/performers/:id', performersApiController.update);
router.delete('/performers/:id', performersApiController.delete);

module.exports = router;