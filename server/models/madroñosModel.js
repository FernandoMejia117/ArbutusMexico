const mongoose = require ('mongoose');
const { Schema } = mongoose;

const MadroñosSchema = new Schema ({
    especie: { type: String, required: true},
    estado: { type: String, required: true},
    habito: { type: String, required: true},
    corteza_ramas: {type: String, required: true},
    corteza_ramillas: {type: String, required: true},
    peciolos: {type: String, required: true},
    hojas: { type: String , required: true},
    haz: { type: String, required: true},
    envez: { type: String, required: true},
    flores: { type: String, required: true}
});

module.exports = mongoose.model('Madroño', MadroñosSchema)