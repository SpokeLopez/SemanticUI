var mysql = require('mysql');

// Productos controller

module.exports = {
  // Funciones del controlador
  getProductos : function(req,res,next){

    var config = require('.././database/config');

    var db = mysql.createConnection(config);
    db.connect();
    var productos = null;
    db.query('SELECT * FROM productos', function(err,rows,fields){
        if(err) throw err;

        productos = rows;
        db.end;
          res.render('productos/productos', {productos : productos});
    });
  }
}
