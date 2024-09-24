import ProductCard from '@/components/productCard';
import { IProduct } from '@/interfaces/product';
import React from 'react';
import { getProductService } from '../../services/productService';



const ProductsPage = async () => {

  const url = `${process.env.API_URL}/products`;
  const products = await getProductService(url);

return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-8 flex items-center justify-center text-blue-950">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductsPage;
