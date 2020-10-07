const express = require('express');

const plansController = require('../controllers/plansControllers');

const router = express.Router();


router.get('/:uid', plansController.getPlansByUid);

router.post('/addplan', plansController.addPlan);

router.patch('/editplan/:pid', plansController.updatePlan);

router.delete('/editplan/:pid', plansController.deletePlan);

module.exports = router;