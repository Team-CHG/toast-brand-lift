import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Redirecting from non-existent route:", location.pathname);
  }, [location.pathname]);

  // Automatically redirect all 404s to the homepage
  return <Navigate to="/" replace />;
};

export default NotFound;
