const Rating = require('../models/ratings.js');

exports.createRating = async (req, res, next) => {
    try {
        const rating = new Rating({
            rating: req.body.rating,
            idWorker: req.body.idWorker,
            idService: req.body.idService
        });

        await rating.save();

        res.status(201).json({ message: 'Rating created successfully', data: rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.readRating = async (req, res, next) => {
    try {
        const rating = await Rating.findOne({ idService: req.params.idService });

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }

        res.status(200).json({ message: 'Rating fetched successfully', data: rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateRating = async (req, res, next) => {
    try {
        const rating = await Rating.findByIdAndUpdate(req.params.id, { 
            rating: req.body.rating,
            idWorker: req.body.idWorker,
            idService: req.body.idService
        }, { new: true });

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }

        res.status(200).json({ message: 'Rating updated successfully', data: rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteRating = async (req, res, next) => {
    try {
        const rating = await Rating.findOneAndRemove({ idService: req.params.idService });

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }

        res.status(200).json({ message: 'Rating deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const rating = await Rating.find({});

        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }

        res.status(200).json({ rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

