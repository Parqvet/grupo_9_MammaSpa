module.exports = { 
    renderAbm: (req, res)=>{
        res.render('form-abm')
    },
    crearProd: function(req, res, next) {
        let producto = {
            nombre: req.body.nombre,
            valor: req.body.valor

         
        }
    },
}    