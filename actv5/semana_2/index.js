// importamos el módulo
const { ProductManger } = require('./ProductManager.js');

const admin =  new ProductManger(); 


const guardar = async () =>{
    try {
        await admin.addProduct({name: 'Celular Motorola', price: 2344})
        await admin.addProduct({name: 'Mouse', price: 400})
    } catch (error) {
        console.error(error)
    }
}


guardar();




/*
admin.addProduct({name: 'Celular Motorola', price: 2344}).then( res => {
    console.log(res);

    admin.addProduct({name: 'Mouse', price: 400}).then( res => {
        console.log( res)
    })

}).catch( error => {
    console.error(error)
})
*/
//
