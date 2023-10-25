import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import usePasswordVisibility from "@/helpers/utils";
import useAuth from "@/hooks/useAuth";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { password, setPassword, email, setEmail, loading, loginUser } =
    useAuth();

  const handleLogin = async (email: string, password: string) => {
    if (email.length === 0) {
      toast.error("Enter your Email Address");
    } else if (password.length === 0) {
      toast.error("Enter your Password");
    } else {
      loginUser(email, password);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    const delayToShowLogin = setTimeout(() => {
      setLoginVisible(true);
    }, 1000);
    return () => clearTimeout(delayToShowLogin);
  }, []);

  return (
    <>
      {loginVisible ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Image
            src={logo}
            height={200}
            width={200}
            alt="logo"
            className="mb-24"
          />
          <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
            <h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
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
                    handleLogin(email, password);
                  }}
                >
                  {loading ? <Spinner /> : "Login"}
                </button>
              </div>
            </form>
            <div className="text-black text-sm">
              Don't have an account yet?{" "}
              <Link href="/register">
                <span className="text-blue-500">REGISTER!</span>
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

export default Login;
