
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {




    return (
    <div className="h-screen bg-gradient-to-b from-gradientStart via-gradientMid1 via-25% to-gradientEnd text-white font-code">
        <header className="flex justify-between p-5">
        </header>

        <main className="flex flex-col items-center justify-center text-center">
        <div className="relative w-80 h-80">
        <Image src="/images/headphones.png" alt="headphones" layout="fill"objectFit="contain" className="w-96 h-auto mx-auto mb-8" />
        </div>
        <h2 className="text-5xl font-extrabold">Auriculares JBL Tune 510</h2>
        <p className="mt-4 text-xl">Descubre la versatilidad y la extrema diversión de este nuevo modelo</p>

        {/* Boton de ingreso */}
        <Link href='/home'
        className="mt-6 px-6 py-3 bg-accent text-dark hover:bg-teal-600 transition duration-300 rounded-full">Encuentra mas</Link>
        </main>
    </div>
    );
};

export default Landing;
