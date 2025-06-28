
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const UsuarioSchema = new Schema({
    nombre: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    password: { type: String, required: true }
}, { timestamps: true });
export default model('Usuario', UsuarioSchema);
