
import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/services/productService';
import ProductDetailServer from './ProductDetailServer';
import { IProduct } from '@/interfaces/product';

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  let product: IProduct | null = null;

  try {
    const url = `${process.env.API_URL}/products`;
    product = await getProductById(url, params.id) as IProduct | null;
  } catch (error) {
    console.error("Error fetching product:", error);
    // Manejar el caso en el que ocurra un error en la API
    notFound(); // Puedes redirigir a la página de error aquí si la API falla
  }

  if (!product) {
    notFound(); // Redirige a la página de error 404 si el producto no existe
  }

  return <ProductDetailServer product={product} />;
};

export default ProductDetailPage;

