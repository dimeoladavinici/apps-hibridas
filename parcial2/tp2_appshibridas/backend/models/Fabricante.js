
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const FabricanteSchema = new Schema({
    nombre: { type: String, required: true, minlength: 3, maxlength: 30 }
}, { timestamps: true });
export default model('Fabricante', FabricanteSchema);
