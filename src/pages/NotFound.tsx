import { useLocation, Navigate } from "@/lib/router-compat";
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
