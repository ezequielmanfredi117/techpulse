
// src/components/ProductList.tsx
import React, { useState, useEffect} from 'react';
import ProductCard from './productCard';
import { IProduct } from '@/interfaces/product';
import { getProductService } from '@/app/services/productService';

const ProductList = async () => {
  const url = `${process.env.API_URL}/products`;
  const products = await getProductService(url);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
