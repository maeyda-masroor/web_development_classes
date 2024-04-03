const express = require('express');
const router = express.Router();
const{
    getAllprodcut,
    getAllProductStatic,
}=require('../controllers/products');

router.route('/').get(getAllprodcut);
//
router.route("/static").get(getAllProductStatic);
module.exports=router;