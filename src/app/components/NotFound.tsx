import { Link } from "react-router";
import { Truck } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <Truck className="w-24 h-24 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Please check the URL or navigate back to our homepage.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
