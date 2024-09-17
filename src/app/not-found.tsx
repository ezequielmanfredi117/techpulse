
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
return (
    <div className="h-screen bg-gradient-to-b from-gradientStart via-gradientMid1 via-25% to-gradientEnd text-white font-code">
    <div className="relative flex flex-col items-center space-y-2 text-center">
    <div className="relative w-96 h-96">
    <Image src="/images/404errorPACMAN.png" alt="error" layout="fill"objectFit="contain" />
    </div>
    <h1 className="text-5xl font-extrabold mt-4">Página No Encontrada</h1>
    <h2 className="text-xl font-extrabold mt-2">Lo sentimos, pero la página que estás buscando no existe.</h2>
    <Link href="/home" className="inline-block mt-8 px-6 py-3 bg-sky-500 text-white font-bold hover:bg-yellow-300 hover:text-black transition duration-300 rounded-full">
    Volver al Inicio
    </Link>
    </div>
    </div>
);
};

export default NotFound;
