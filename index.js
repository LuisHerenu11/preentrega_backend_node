// importaciones
import { getAllProducts, getProductById, createProduct } from './productController.js';

// extracción de datos
const [, , action, target, ...data] = process.argv;

// estructura de control
switch (action?.toUpperCase()) {
    case 'GET':
        if (target === 'products') {
            console.log("-> En ejecución: Traer TODOS los productos...");
            await getAllProducts(); // función asíncrona
        } else if (target?.startsWith('products/')) {
            const id = target.split('/')[1];
            console.log(`-> En ejecución: Traer el producto con ID: ${id}`);
            await getProductById(id); // llamada a la FakeStore api
        }
        break;

    case 'POST':
        if (target === 'products') {
            const [title, price, category] = data; 
            console.log(`-> En ejecución: Crear producto "${title}" a $${price} en la categoría "${category}"`);
            await createProduct(title, price, category); // llamada a la FakeStore api
        }
        break;

    case 'DELETE':
        // Eliminar Producto [cite: 25]
        if (target?.startsWith('products/')) {
            const id = target.split('/')[1];
            console.log(`En ejecución: Eliminar el producto con ID: ${id}`);
            // Acá irá el fetch DELETE
        }
        break;

    default:
        console.log("No se reconoce el comando... probar con GET, POST o DELETE.");
}
