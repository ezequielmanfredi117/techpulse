"use client";

import { useEffect, useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateName,
  validateAddress,
  validatePhone,
} from "@/helpers/validations";
import { RegisterForm as Data, Errors } from "@/interfaces/forms";
import { registerService } from "@/app/services/AuthService";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const initialData: Data = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  });
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Nuevo estado

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validar antes de enviar
    const newErrors: Errors = {
      email: validateEmail(data.email),
      name: validateName(data.name),
      password: validatePassword(data.password),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone),
    };

    setErrors(newErrors);

    // Solo enviar si no hay errores
    if (Object.values(newErrors).every((error) => error === "")) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await registerService(apiUrl + "/users/register", data);
      if (!response.message) {
        alert("You are registered");
        router.back();
      } else {
        setMessage(response.message);
      }
    } else {
      setIsTouched(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (isTouched) {
      setErrors({
        email: validateEmail(data.email),
        name: validateName(data.name),
        password: validatePassword(data.password),
        address: validateAddress(data.address),
        phone: validatePhone(data.phone),
      });
    }
  }, [data, isTouched]);

  const inputClass = (field: keyof Errors) => {
    return `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      errors[field] ? "border-red-500" : ""
    }`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className={inputClass("name")}
        />
        {isTouched && errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={inputClass("email")}
        />
        {isTouched && errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className={inputClass("password")}
        />
        {isTouched && errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Dirección
        </label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          className={inputClass("address")}
        />
        {isTouched && errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Teléfono
        </label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className={inputClass("phone")}
        />
        {isTouched && errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-primaryDark hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrarse
        </button>
      </div>

      {message && <p className="text-center text-green-500">{message}</p>}
    </form>
  );
};

export default RegisterForm;
