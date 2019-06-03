const router = require('express').Router();
const careerController = require('../../controllers/careerController');

// Matches with "/api/career"
router.route('/details')
.get(careerController.details);



module.exports = router;