const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const ad_controller = require('./ads.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', ad_controller.all_ads);

router.post('/create', ad_controller.ad_create);

router.get('/:id', ad_controller.ad_details);

router.put('/:id/update', ad_controller.ad_update); //update

router.delete('/:id/delete', ad_controller.ad_delete);

module.exports = router;