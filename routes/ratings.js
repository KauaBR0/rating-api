const express = require('express');
const router = express.Router();
const { createRating, readRating, updateRating, deleteRating, getAll } = require('../controllers/ratings');

router.post('/rating', createRating);
router.get('/rating/:idService', readRating);
router.put('/rating/:id', updateRating);
router.delete('/rating/:idService', deleteRating);
router.get('/rating', getAll);

module.exports = router;