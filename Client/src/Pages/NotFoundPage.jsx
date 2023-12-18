import React from 'react';
import { Link } from 'react-router-dom'; 

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404 Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
