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

// export const createProduct = async (productData) => { ... }
// export const deleteProduct = async (id) => { ... }