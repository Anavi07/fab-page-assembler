
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-scale-in">
        <h1 className="text-6xl font-bold mb-4 text-taskly-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! We can't find that page</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-taskly-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
