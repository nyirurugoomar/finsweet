import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-white">
      <div className="text-center md:mt-10">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link href="/">
          <h1 className="inline-block px-6 py-3 text-lg font-medium text-white bg-black rounded-md hover:bg-blue-700">
            Go Back to Homepage
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
