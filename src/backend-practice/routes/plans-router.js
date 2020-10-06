const express = require('express');

const plansController = require('../controllers/plansControllers');

const router = express.Router();


router.get('/', plansController.getPlans);

router.post('/addplan', plansController.addPlan);


module.exports = router;