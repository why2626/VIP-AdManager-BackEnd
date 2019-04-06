const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const target_controller = require('./target.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', target_controller.all_targets);

router.post('/create', target_controller.target_create);

router.get('/:id', target_controller.target_details);

router.put('/:id/update', target_controller.target_update); //update

router.delete('/:id/delete', target_controller.target_delete);

module.exports = router;