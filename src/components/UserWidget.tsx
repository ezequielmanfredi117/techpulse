"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaRegGrinBeamSweat } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";





export const UserWidget = () => {

    const {user, logout} = useContext
    (AuthContext);

    if(user) {

        return (
            <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-white gap-4">
        <FaUserAlt />
        </Link>
        <Link href="/cart" className="text-white gap-4">
        <MdShoppingCart />
        </Link>
        <button onClick={logout} className="text-white gap-4">
        <IoLogOut />
        </button>
    </div>
    );
} 
    return (
    <Link href="/login" className="text-white gap-4">
        <FaRegGrinBeamSweat />
        </Link>
    );
};


