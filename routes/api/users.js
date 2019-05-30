const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const isAuthenticated = require("../../controllers/authentication");

// Matches with "/api/users"
router.route('/login')
.post(usersController.login)
// .get(usersController.findUser)
// .get(isAuthenticated.authentication)


router.route('/signup')
.post(usersController.signUp);
// router.route('auth/google/callback');

// router.route('/validate').post(usersController.validateToken);
// router.route('/signup').post(usersController.signup);

module.exports = router;