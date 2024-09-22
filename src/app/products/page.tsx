import React from 'react';
import ProductList from '../../components/productList';


const ProductsPage = () => {
return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-8 flex items-center justify-center text-blue-950">Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
