const Ad = require('./ads.model');

//获得随机数 用于虚拟数据源
function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) === min  ? (min + 1) : Math.floor(Math.random() * (max - min)) + min
}

//Simple version, without validation or sanitation
exports.all_ads = function (req, res) {
    Ad.find({userId: req.user.sub},function (err, Ads) {
        if (err) return next(err);
        res.json(Ads);})
};
exports.ad_create = function (req, res) {
    let ad = new Ad(
        {
            adName: req.body.adName,
            isEndDateSet: req.body.isEndDateSet,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            appPoint: req.body.appPoint,
            adPosition: req.body.adPosition,
            uploadedImage: req.body.uploadedImage,
            linkType: req.body.linkType,
            linkID: req.body.linkID,
            targets: req.body.targets,
            divices: req.body.divices,
            pricingType: req.body.pricingType,
            compativeType: req.body.compativeType,
            adPrice: req.body.adPrice,
            dayLimitPrice: req.body.dayLimitPrice,
            turnedOn: true,
            status: '投放中',
            clickCount: RandomNum(700,3000), //点击量-虚拟数据
            exposure: RandomNum(8000,70000), //曝光量-虚拟数据
            createTime: req.body.createTime, 
            userId: req.user.sub,
        }
    );
    ad.save(function (err) {
        if (err) {
            return next(err);
            // res.send(err)
            // return
        }
        res.send('Ad Created successfully')
    })
};
exports.ad_details = function (req, res) {
    Ad.findById(req.params.id, function (err, ad) {
        if (err) return next(err);
        res.send(ad);
    })
};
exports.ad_update = function (req, res) {
    Ad.findByIdAndUpdate(req.params.id, {$set: req.body},req.body, function (err, ad) {
        if (err) return next(err);
        res.send('Ad udpated.');
    });
};
exports.ad_delete = function (req, res) {
    Ad.findByIdAndRemove(req.params.id, req.body, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};