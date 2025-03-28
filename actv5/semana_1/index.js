// importamos el módulo
const Persona = require('./Persona.js');
const { ProductManger } = require('./ProductManager.js');

// Generar ids Random
const id = crypto.randomUUID();
const admin =  new ProductManger();

admin.addProduct({id, name: 'Celu', price: 2344})
admin.addProduct({id: 2, name: 'Mouse', price: 400})





const persona = {
    nombre: 'Juan',
    apellido: 'Ruiz'
}

/* const nom = persona.nombre;
const ape = persona.apellido;
 */
const { nombre, apellido } = persona;



const p1 = new Persona();
p1.setNombre('Josefina')
let nombrep = p1.getNombre();
console.log( `Hola ${nombre}`);

console.log(ProductManger)