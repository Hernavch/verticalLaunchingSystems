const router = require("express").Router();

const usersController = require("../../controllers/usersController");
const isAuthenticated = require("../../controllers/authentication");


// Matches with "/api/users"
router.route('/login')
.post(usersController.login);

router.route('/signup')
.post(usersController.signUp);
// router.route('auth/google/callback');


module.exports = router;