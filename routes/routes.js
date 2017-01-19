var express = require('express');
var router = express.Router();
var controllers = require('.././controllers')

/* GET home page. */
router.get('/', controllers.homecontroller.index);

//Rutas para productos
router.get('/productos', controllers.productoscontroller.getProductos)

module.exports = router;
