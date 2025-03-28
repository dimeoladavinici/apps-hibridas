class Persona {
    // Atributos
    nombre = '';
    apellido = '';
    edad = 0;

    constructor(nombre, apellido, edad){
        this.nombre =  nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // Métodos
    getNombre = function(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEdad(){
        return this.edad;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
}

// Exportamos la clase
module.exports = Persona