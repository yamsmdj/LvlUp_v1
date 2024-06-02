const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercise')

router.get('/', exerciseController.getAllExercise);
router.get('/:id', exerciseController.getExercise);
router.post('/', exerciseController.createExercise);
router.delete('/:id', exerciseController.deleteExercise);
router.put('/:id', exerciseController.modifyExercise);

module.exports = router;