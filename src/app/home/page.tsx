
import React from "react";
import Image from "next/image";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import { IProduct } from "@/interfaces/product";
import { getProductService } from "../../services/productService";

const Home = async () => {

  let products: IProduct[] = [];
  // Obtener productos desde la API
  try {
    // Obtener productos desde la API
    const url = `${process.env.API_URL}/products`;
    products = await getProductService(url);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  // Limitar la cantidad de productos 
  const limitedProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      
      <section className="relative w-full h-96 overflow-hidden bg-gray-800 text-white text-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/smartphone.png" 
            alt="Smartphone" 
            fill 
            style={{ objectFit: "cover" }} 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 pl-16">
          <h1 className="text-4xl font-bold">Bienvenidos a Tech Pulse!</h1>
          <p className="mt-4">Descubre los mejores productos al mejor precio.</p>
        </div>
      </section>

      {/* Productos seleccionados */}
      <section className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {limitedProducts.map((product: IProduct, i:number) => (
          <ProductCard key={i} product={product} />
        ))}
      </section>

      {/* Boton ver mas productos */}

      <div className="text-center my-8">
        <Link href='/products'>
          <button 
            className="bg-primaryDark text-white py-2 px-4 rounded hover:scale-105 hover:bg-gradientMid2 active:scale-95">
            Ver más productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
