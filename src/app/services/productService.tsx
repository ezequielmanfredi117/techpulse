import { IProduct } from "@/interfaces/product";

export const getProductService = async (url: string): Promise<IProduct[]> => {
    try {
        const response = await fetch(url, { next: { revalidate: 0 } });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        // Asegúrate de que la respuesta sea un array de productos
        if (!Array.isArray(products)) {
            console.error('Invalid data format: Expected an array');
            throw new Error('Invalid data format: Expected an array');
        }

        return products;
    } catch (error) {
        console.error('Error in getProductService:', error);
        throw error; // Propaga el error para que pueda ser manejado por el componente
    }
};
