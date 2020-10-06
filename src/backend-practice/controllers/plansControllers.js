const mongoose = require('mongoose');

const HttpError = require('../models/http-error');

const Plan = require('../models/plan');
const User = require('../models/user');

const addPlan = async (req, res, next) => {
    const { title, starts, ends, uid } = req.body;
    const createdPlan = new Plan ({
        title, starts, ends, uid
    });

    let user;
    try {
        user = await User.findById(uid);
    } catch (err) {
        const error = new HttpError('Could not find the provided user id', 404);
        return next(error);
    }

    console.log(user);
    console.log(createdPlan);

    try {
        await createdPlan.save();
    } catch (err) {
        const error = new HttpError('Adding plan failed, please try again', 500);
        return next(error);
    }

    res.status(201).json({ plans: createdPlan.toObject({ getters: true }) });

}

const getPlansByUid = async (req, res, next) => {
    const uid = req.params.uid;

    let user;
    try {
        user = await User.findById(uid);
    } catch (err) {
        const error = new HttpError('Could not find the user', 404);
        return next(error);
    }
    
    let plans;
    try {
        plans = await Plan.find({ uid: uid });
    } catch (err) {
        const error = new HttpError('Could not find a plan. please add plans', 404);
        return next(error);
    }

    if (!plans) {
        const error = new HttpError(`You haven't added a plan yet, please add plans`, 404);
        return next(error);
    }
    

    res.json({plans});
}
exports.addPlan = addPlan;
exports.getPlansByUid = getPlansByUid;