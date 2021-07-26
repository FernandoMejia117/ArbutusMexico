const ModeloMadroño = require('../models/madroñosModel');

const madroñoCtrl = {};

madroñoCtrl.indexMadroño = function (req, res){
    ModeloMadroño.find({})
    .then(madroño => {
        if(madroño.length)return res.status(200).send({madroño});
        return res.status(204).send({message: 'No hay datos papu'});
    }).catch(error => res.status(500).send({error}));
}


madroñoCtrl.crearMadroño = function (req, res){
    new ModeloMadroño(req.body).save()
    .then(madroño => res.status(200).send({madroño}))
    .catch(error => res.status(500).send({error}));   
}


madroñoCtrl.buscarMadroño = function (req, res, next){
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloMadroño.find(consulta).then(madroño => {
        if (!madroño.length)return next();
        req.body.madroño = madroño;
        return next();
    }).catch(error => {
        req.body.error = error;
        next(); 
}) 
}

madroñoCtrl.mostrarMadroño = function (req, res){
    if(req.body.error)return res.status(500).send({error});
    if(!req.body.madroño) return res.status(404).send({message:'NO SE ENCONTRO EL ARBOL'});
    let madroño=req.body.madroño;
    return res.status(200).send({madroño});
}


madroñoCtrl.actualizarMadroño = function (req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.madroño) return res.status(404).send({message:'NO SE PUEDE ACTUALIZAR'});
    let madroñoObj = req.body.madroño[0];
    madroñoObj = Object.assign(madroñoObj,req.body);
    madroñoObj.save().then(madroñoAlta =>{
        res.status(200).send({message: 'Registro Actualizado',madroñoAlta});
    }).catch(error => res.status(500).send({error}));
}


madroñoCtrl.eliminarMadroño = function (req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.madroño) return res.status(404).send({message:'NO SE PUEDE ELIMINAR'});
    req.body.madroño[0].remove().then(madroñoEliminar => {
        res.status(200).send({message: 'Se Elimino Correctamente', madroñoEliminar});
    }).catch(error => res.status(500).send({message: 'No logro Eliminar', error}));
}




module.exports = madroñoCtrl;