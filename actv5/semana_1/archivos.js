const fs = require('fs');
const path = './notas.txt';
const data = 'Nuevo texto';



// Lectura
const fn = function(err, data){
    if( err){
        console.error('Ups... tenemos un error');
    } else {
        console.log( data.toString() );
    }
}

// Lectura de archivo
fs.readFile(path, fn);

// Escritura
fs.writeFile(path, data, function(error){
    if( error){
        console.error('Upss.. tenemos un error al guardar el archivo');
    } else {
        console.info('Todo Ok 👌');
    }
})

