"use client";

import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export const Dashboard = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        if (!user?.login) {
            router.push("/login")
        }
    }, []);


  return (
  <>
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-950">Dashboard</h1>

      {Array.isArray(user?.user?.orders) && user?.user?.orders.length > 0 ? (
        <div className="grid gap-4">
          {user.user.orders.map((order, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center"
            >
              <div className="text-lg">
                <p className="font-semibold text-gray-700">Order #{order.id}</p>
                <p className="text-gray-500">Date: {order.date}</p>
              </div>

              <div className="text-right">
                <button className="bg-primaryDark text-white font-bold py-2 px-4 rounded hover:bg-secondaryDark">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No orders found</p>
      )}
    </div>
  </>
);

};