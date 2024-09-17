// src/components/ProductCard.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IProduct } from '../interfaces/product';
import Link from 'next/link';
import AddToCartButton from './addToCartButton';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <Image 
          src={product.image}
          alt={product.name}
          width={500} 
          height={300} 
          className="w-full object-cover"
        />
      </Link>
      <div className="p-4 m-2 ">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-700">Precio: ${product.price}</p>
        <button
          onClick={toggleModal}
          className="mt-4 mr-1 bg-primaryDark text-white py-2 px-4 rounded hover:bg-secondaryDark"
        >
          Ver más
        </button>
        <AddToCartButton product={product} /> 
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <div className="flex flex-col md:flex-row items-center">
              <Image 
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full md:w-1/2 object-cover"
              />
              <div className="md:ml-6">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4">Precio: ${product.price}</p>
                <button
                  onClick={toggleModal}
                  className="bg-red-500 text-white mr-1 py-2 px-4 rounded hover:bg-red-600"
                >
                  Cerrar
                </button>
                <AddToCartButton product={product} /> 
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
