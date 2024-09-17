// src/app/products/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/app/services/productService';
import ProductDetailServer from './ProductDetailServer';

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const url = `${process.env.API_URL}/products`;
  const product = await getProductById(url, params.id);

  if (!product) {
    notFound(); // Redirige a la página de error 404 si el producto no existe
  }

  return <ProductDetailServer product={product} />;
};

export default ProductDetailPage;
