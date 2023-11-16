import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import usePasswordVisibility from "@/helpers/utils";
import useAuth from "@/hooks/useAuth";
import Spinner from "../components/Spinner";
import useFieldValidation from "@/helpers/validations";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";


const Register: React.FC = () => {
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { validateEmail, validatePassword } = useFieldValidation();
  const { password, setPassword, email, setEmail, loading, registerUser } =
    useAuth();

  const handleRegister = async (email: string, password: string) => {
    if (!validateEmail(email)) {
      if (email.length === 0) {
        toast.error("Enter an Email Address");
      } else {
        toast.error("Please enter a valid email address");
      }
    } else if (!validatePassword(password)) {
      if (password.length === 0) {
        toast.error("Enter a Password");
      } else if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
      } else {
        toast.error(
          "Password must contain letters, numbers, and a special character."
        );
      }
    } else {
      registerUser(email, password);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [registerVisible, setRegisterVisible] = useState(false);

  useEffect(() => {
    const delayToShowRegister = setTimeout(() => {
      setRegisterVisible(true);
    }, 1000);
    return () => clearTimeout(delayToShowRegister);
  }, []);

  return (
    <>
      {registerVisible ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Image
            src={logo}
            height={200}
            width={200}
            alt="logo"
            className="mb-24"
          />
          <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
            <h2 className="text-2xl font-semibold mb-4 text-black">Register</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full h-12 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister(email, password);
                  }}
                >
                  {loading ? <Spinner /> : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="text-black text-sm">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-blue-500">LOGIN!</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Register;
