// Home controller

module.exports = {
  // Funciones del controlador
  index : function (req,res,next){
    res.render('index', {title : 'Bienvenido al CRUD'})
  }
}
