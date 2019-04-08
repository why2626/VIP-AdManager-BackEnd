const Target = require('./target.model');

//Simple version, without validation or sanitation
exports.all_targets = function (req, res) {
    Target.find({userId: req.user.sub},function (err, Targets) {
        if (err) return next(err);
        res.json(Targets);})
};
exports.target_create = function (req, res) {
    let target = new Target(
        {
            targetName: req.body.targetName,
            platform: req.body.platform,
            createTime: req.body.createTime,
            gender: req.body.gender,
            age: req.body.age,
            category: req.body.category,
            userBtn_1: req.body.userBtn_1,
            userBtn_2: req.body.userBtn_2,
            userBtn_3: req.body.userBtn_3,
            userBtn_4: req.body.userBtn_4,
            userBtn_5: req.body.userBtn_5,
            branBtn_1: req.body.branBtn_1,
            branBtn_2: req.body.branBtn_2,
            branBtn_3: req.body.branBtn_3,
            branBtn_4: req.body.branBtn_4,
            branBtn_5: req.body.branBtn_5,
            categBtn_1: req.body.categBtn_1,
            categBtn_2: req.body.categBtn_2,
            categBtn_3: req.body.categBtn_3,
            categBtn_4: req.body.categBtn_4,
            categBtn_5: req.body.categBtn_5,
            userId: req.user.sub,
            
        }
    );
    target.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Target Created successfully')
    })
};
exports.target_details = function (req, res) {
    Target.findById(req.params.id, function (err, target) {
        if (err) return next(err);
        res.send(target);
    })
};
exports.target_update = function (req, res) {
    Target.findByIdAndUpdate(req.params.id, {$set: req.body},req.body, function (err, target) {
        if (err) return next(err);
        res.send('Target udpated.');
    });
};
exports.target_delete = function (req, res) {
    Target.findByIdAndRemove(req.params.id, req.body, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};