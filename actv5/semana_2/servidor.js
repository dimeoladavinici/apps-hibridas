const http = require('http');
const { ProductManger } = require('./ProductManager.js');
const admin = new ProductManger();
const port = 3000;

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: 'Bienvenido' }));
    } else if (url === '/products' && method === 'GET') {
        const products = await admin.getProducts();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else if (url.startsWith('/products/') && method === 'GET') {
        const id = url.split('/')[2];
        const product = await admin.getProductById(id);
        if (product && product.id) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Producto no encontrado' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no válida' }));
    }
});

server.listen(port, () => {
    console.log(`Servidor web corriendo en el puerto ${port}`);
});
