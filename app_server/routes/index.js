var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');


/* Items list page */
router.get('/', ctrlItems.angularApp);

/* Add Item page */
//router.post('/addItem/', ctrlAddItem.angularApp);

module.exports = router;
