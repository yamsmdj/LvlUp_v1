const Exercise = require('../models/exercise');

exports.createExercise = (req, res, next) => {
    delete req.body._id;
    const exercise = new Exercise({
        ...req.body
        // title:  req.body.title,
        // description : req.body.description,
        // content:  req.body.content,
        // exercises: req.body.exercises
    })
    exercise.save()
    .then(() => res.status(201).json({message : 'Exercise Created Success'}))
    .catch(error => res.status(400).json({error}))
}

exports.getAllExercise = (req, res, next) => {
    Exercise.find()
    .then(exercises => res.status(200).json(exercises))
    .catch(error => res.status(400).json({error}))
}
exports.getExercise = (req, res, next) => {
    Exercise.findOne({_id: req.param.id})
    .then(exercises => res.status(200).json(exercises))
    .catch(error => res.status(400).json({error}))
}

exports.modifyExercise = (req, res, next) => {
    Exercise.updateOne({_id: req.param.id}, {...req.body, _id: req.param.id})
    .then(() => res.status(200).json({message : 'Exercise Updated'}))
    .catch(error => res.status(400).json({error}))
}

exports.deleteExercise = (req, res, next) => {
    Exercise.deleteOne({_id: req.param.id})
    .then(exercises => res.status(200).message('Exercise deleted'))
    .catch(error => res.status(400).json({error}))
}

