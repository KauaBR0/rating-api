const mongoose = require('mongoose');

   const RatingSchema = mongoose.Schema({
       rating: { type: String },
       idWorker: { type: String },
       idService: { type: String },
       idUser: { type: String }
   });

   const Rating = mongoose.model('ratings', RatingSchema);

   module.exports = Rating;