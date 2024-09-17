
"use client";
import React, { useContext } from 'react';
import { IProduct } from '../interfaces/product';
import { AuthContext } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
product: IProduct;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
const { user } = useContext(AuthContext);
const router = useRouter();

const handleAddToCart = () => {
    if(!user?.login) {
        router.push("/login");
    } else {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (!cart.some((p: IProduct) => p.id === product?.id)) {
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to your cart`);
        } else {
            alert(`${product.name} is already in your cart`);
        }
    }
};

return (
    <button
    onClick={handleAddToCart}
    className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-700"
    >
    Agregar al carrito
    </button>
);
};

export default AddToCartButton;
