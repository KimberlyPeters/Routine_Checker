import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { auth } from "@/helpers/firebase";
import { toast } from "react-toastify";

const useAuth = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log(res);
        toast.success("Login Successful");
        setLoading(false);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      })
      .catch((err: any) => {
        console.log(err.message);
        setLoading(false);
        toast.error(err.message);
      });
  };
  const registerUser = (email: string, password: string) => {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("Account Created Successfully");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        toast.error(err.message);
      });
  };

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("User logged out");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Log-out error:", error);
      });
  };

  return {
    password,
    setPassword,
    email,
    setEmail,
    loading,
    loginUser,
    registerUser,
    handleLogOut,
  };
};

export default useAuth;
