import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#3B82F6" />
    </div>
  ); // or any loading indicator
};

export default LoginPage;
