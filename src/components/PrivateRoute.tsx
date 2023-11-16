import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { auth } from "@/helpers/firebase";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    // Clean up
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    router.push("/login");
    return null;
  }

  // Render protected content if authenticated
  return children;
};

export default PrivateRoute;
