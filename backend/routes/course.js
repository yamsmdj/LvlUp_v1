const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course')
const auth = require('../middleware/auth')

router.get('/', courseController.getAllCourse);
router.get('/:id', courseController.getCourse);
router.post('/', auth, courseController.createCourse);
router.delete('/:id', auth, courseController.deleteCourse);
router.put('/:id', auth, courseController.modifyCourse);

module.exports = router;