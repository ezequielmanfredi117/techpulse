import { IProduct } from "@/interfaces/product";

export const getProductService = async (url: string) => {
    const response = await fetch(url, { next: { revalidate: 0}});
    const products = await response.json();

return products; 
};

export const getProductById = async (url: string, id: string) => {
const response = await getProductService(url);

const product = response.filter(
    (item: IProduct) => item.id.toString() === id
)[0];
    
    return product;
};