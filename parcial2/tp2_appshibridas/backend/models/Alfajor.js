
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const AlfajorSchema = new Schema({
    relleno: { type: String, required: true, minlength: 3, maxlength: 30 },
    banado: { type: Boolean, required: true },
    precio: { type: Number, required: true, min: 0.01, max: 9999 },
    calorias: { type: Number, required: true, min: 1, max: 2000 },
    fabricanteId: { type: Schema.Types.ObjectId, ref: 'Fabricante', required: true },
    imagen: { type: String, required: true }
}, { timestamps: true });
export default model('Alfajor', AlfajorSchema);
