// importaciones
import { getAllProducts, getProductById, createProduct, deleteProduct } from './productController.js';

// extracción de datos
const [, , action, target, ...data] = process.argv;

// estructura de control
switch (action?.toUpperCase()) {
    case 'GET':
        if (target === 'products') {
            console.log("-> En ejecución: Traer TODOS los productos...");
            await getAllProducts();
        } else if (target?.startsWith('products/')) {
            const id = target.split('/')[1];
            console.log(`-> En ejecución: Traer el producto con ID: ${id}`);
            await getProductById(id);
        }
        break;

    case 'POST':
        if (target === 'products') {
            const [title, price, category] = data; 
            console.log(`-> En ejecución: Crear producto "${title}" a $${price} en la categoría "${category}"`);
            await createProduct(title, price, category);
        }
        break;

    case 'DELETE':
        if (target?.startsWith('products/')) {
            const id = target.split('/')[1];
            console.log(`-> En ejecución: Eliminar el producto con ID: ${id}`);
            await deleteProduct(id);
        }
        break;

    default:
        console.log("No se reconoce el comando... probar con GET, POST o DELETE.");
}
