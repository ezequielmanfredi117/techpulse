import RegisterForm from "../../components/registerForm";

const RegisterPage = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className=" text-6xl font-bold mb-8 text-blue-950 ">Login</h1>
      <RegisterForm />
    </div>
    </>
  );
};

export default RegisterPage;
