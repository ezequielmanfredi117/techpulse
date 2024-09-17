"use client";

import React from 'react';
import Image from 'next/image';
import AddToCartButton from '@/components/addToCartButton';
import { IProduct } from '@/interfaces/product';
import Link from 'next/link';

interface ProductDetailServerProps {
product: IProduct;
}

const ProductDetailServer: React.FC<ProductDetailServerProps> = ({ product }) => {
return (
    <div className="container mx-auto p-4">
    <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
            className="object-cover"
        />
        </div>
        <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 font-bold">Precio: ${product.price}</p>
        <div className="mt-4">
        <Link
                href='/products'
                className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500"
                >
                Volver
                </Link>
            <AddToCartButton product={product} />
        </div>
        </div>
    </div>
    </div>
);
};

export default ProductDetailServer;
