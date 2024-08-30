const express = require('express');

const router = express.Router();
const { createRating, readRating, updateRating, deleteRating, getAll } = require('../controllers/ratings');

router.post('/', createRating);
router.get('/:idService', readRating);
router.put('/:id', updateRating);
router.delete('/:idService', deleteRating);
router.get('/', getAll);

module.exports = router;