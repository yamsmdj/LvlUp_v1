const Course = require('../models/course');

exports.createCourse = (req, res, next) => {
    delete req.body._id;
    const course = new Course({
        ...req.body
        // title:  req.body.title,
        // description : req.body.description,
        // content:  req.body.content,
        // exercises: req.body.exercises
    })
    course.save()
    .then(() => res.status(201).json({message : 'Course Created Success'}))
    .catch(error => res.status(400).json({error}))
}

exports.getAllCourse = (req, res, next) => {
    Course.find()
    .then(courses => res.status(200).json(courses))
    .catch(error => res.status(400).json({error}))
}
exports.getCourse = (req, res, next) => {
    Course.findOne({_id: req.param.id})
    .then(courses => res.status(200).json(courses))
    .catch(error => res.status(400).json({error}))
}

exports.modifyCourse = (req, res, next) => {
    Course.updateOne({_id: req.param.id}, {...req.body, _id: req.param.id})
    .then(() => res.status(200).json({message : 'Course Updated'}))
    .catch(error => res.status(400).json({error}))
}

exports.deleteCourse = (req, res, next) => {
    Course.deleteOne({_id: req.param.id})
    .then(courses => res.status(200).message('Course deleted'))
    .catch(error => res.status(400).json({error}))
}

