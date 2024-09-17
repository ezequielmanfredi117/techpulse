"use client";

import { AuthContext } from "@/contexts/authContext";
import { IProduct } from "@/interfaces/product";
import { useContext, useState, useEffect } from "react";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  
  // Cargar el carrito desde el localStorage
  const [cart, setCart] = useState<IProduct[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : []
  );

  // Calcular el precio total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Manejar la orden
  const handleOrder = () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/orders";
    const products = cart.map((product: IProduct) => product.id);
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: user?.user.userId,
        products: products,
      }),
    };
    fetch(url, req)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        alert("Order placed successfully!");
      })
      .catch((error) => console.log(error));
  };

  // Manejar la eliminación de un producto del carrito
  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-950">
        Shopping Cart
      </h1>

      {/* Lista de productos en el carrito */}
      <div className="mt-8 grid grid-cols-1 gap-4">
        {cart.length > 0 ? (
          cart.map((product: IProduct, i: number) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
            >
              <div className="text-lg">
                <p className="font-semibold text-gray-700">{product.name}</p>
                <p className="text-gray-500">US ${product.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>

      {/* Encabezado con total de productos y botón de orden */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center">
        <div className="text-lg">
          <h5 className="font-semibold text-gray-700">
            Total Products: {cart.length}
          </h5>
        </div>

        {/* Cálculo del total de precios */}
        <div className="text-lg font-semibold text-gray-700">
          <h5>Total: US ${totalPrice.toFixed(2)}</h5>
        </div>

        <button
          className="bg-primaryDark text-white font-bold py-2 px-4 rounded hover:bg-secondaryDark"
          onClick={handleOrder}
        >
          Finish order
        </button>
      </div>
    </main>
  );
};

export default CartPage;
