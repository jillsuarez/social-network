const router = require('express').Router();

const {
  addThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/')
.get(getAllThoughts);

router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction);

// /api/thought/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;