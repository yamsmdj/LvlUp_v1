const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course')

router.get('/', courseController.getAllCourse);
router.get('/:id', courseController.getCourse);
router.post('/', courseController.createCourse);
router.delete('/:id', courseController.deleteCourse);
router.put('/:id', courseController.modifyCourse);

module.exports = router;