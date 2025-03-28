const fs = require('fs');
const path = './products.json';

class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    // { name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
    addProduct(product){
        // debería validar los campos
        // formateamos los datos
        const data = JSON.stringify( product, null, 2);
        fs.writeFile(path, data, function(){

        })
        this.products.push( product);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find(  item => item.id == id  );
        return product ? product : {};
    }
}

const key = '1234';

module.exports = { ProductManger, key };
/* module.exports = { 
                    ProductManger: ProductManger, 
                    key: key  
                }; */

