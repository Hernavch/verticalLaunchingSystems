const router = require('express').Router();
const careerController = require('../../controllers/careerController');

// Matches with "/api/users"
router.route('/details')
.post(careerController.details);

router.route('/page')
.post(careerController.page);

router.route('/video')
.post(careerController.video);
// router.route('auth/google/callback');

// router.route('/validate').post(usersController.validateToken);
// router.route('/signup').post(usersController.signup);

module.exports = router;