const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
  deleteUser
} = require('../../controllers/user-controller');

// /api/user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend);

router
.route('/:id')

module.exports = router;