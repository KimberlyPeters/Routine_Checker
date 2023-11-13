import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    // Clean up
    return () => unsubscribe();
  }, []);

  // Check for loading
  if (loading) {
    return <Loading />;
  }

  if (isAuthenticated === true) {
    return <Outlet />;
  } else if (isAuthenticated === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    // If isAuthenticated is still null, you can show a loading indicator or handle it differently
    return <Loading />;
  }
};

export default PrivateRoute;
