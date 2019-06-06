const router = require('express').Router();
const careerController = require('../../controllers/careerController');
const jobController = require("../../controllers/jobController");

// Matches with "/api/career"
router.route('/details')
.get(careerController.details);

router.route('/getjobs')
.get(jobController.getjobs)
.post(jobController.getjobs);

module.exports = router;