"use client";

import { useContext, useEffect, useState } from "react";
import { validateEmail, validatePassword } from "@/helpers/validations";
import { LoginForm as FormData, LoginErrors } from "@/interfaces/forms";
import { loginService } from "@/app/services/AuthService";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const initialData: FormData = { email: "", password: "" };
  const initialErrors: LoginErrors = { email: "", password: "" };
  const initialDirty = { email: false, password: false };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);
  const [dirty, setDirty] = useState(initialDirty);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validar antes de enviar
    const newErrors: LoginErrors = {
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    };

    setErrors(newErrors);

    // Solo enviar si no hay errores
    if (Object.values(newErrors).every((error) => error === "")) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await loginService(apiUrl + "/users/login", data);
      console.log("Login response:", response);
      if (response?.login) {
        setMessage("Login successful");
        setUser({
          login: true,
          user: response.user,
          token: response.token
      }); // Guarda el usuario en el contexto
        router.back();
      } else {
        setMessage("User or credentials invalid");
      }
    }
  };

  useEffect(() => {
    if (Object.values(dirty).some((field) => field)) {
      setErrors({
        email: validateEmail(data.email),
        password: validatePassword(data.password),
      });
    }
  }, [data, dirty]);

  const inputClass = (field: keyof LoginErrors) => {
    return `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      errors[field] ? "border-red-500" : ""
    }`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("email")}
        />
        {dirty.email && errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("password")}
        />
        {dirty.password && errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-primaryDark hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
      {message && <p className="text-center text-red-500">{message}</p>}
      </div>
      <div className="text-center">
        <p className="text-gray-700">
          ¿Todavía no estás registrado?{" "}
          <Link href="/register" className="text-primaryDark hover:text-secondaryDark font-bold">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
