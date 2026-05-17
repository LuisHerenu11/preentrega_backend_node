const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("LISTA DE PRODUCTOS");
        console.log(data);
    } catch (error) {
        console.error("Fallo al comunicarse con FakeStore API:", error.message);
    }
};

export const getProductById = async (id) => {
    try {
        // concatenación URL + ID de producto buscado
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        console.log(` DETALLE DEL PRODUCTO ${id} `);
        console.log(data);
    } catch (error) {
        console.error(`No se encontró el producto ${id}:`, error.message);
    }
};

export const createProduct = async (title, price, category) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            // como FakeStore necesita datos en formato JSON, parseamos los datos a JSON
            body: JSON.stringify({
                title: title,
                price: Number(price),
                category: category
            })
        });
        
        const data = await response.json();
        console.log("PRODUCTO CREADO CON ÉXITO");
        console.log(data);
    } catch (error) {
        console.error("Fallo al crear el producto:", error.message);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        console.log(`PRODUCTO ${id} ELIMINADO`);
        console.log(data); 
    } catch (error) {
        console.error(`Fallo al eliminar el producto ${id}:`, error.message);
    }
};