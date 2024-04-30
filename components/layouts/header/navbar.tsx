import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <nav className="w-full bg-white py-2 px-4 transition-colors duration-500 ease-out dark:bg-gray-900 md:px-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="text-3xl font-medium text-black">Movie App</a>
        </Link>
      </div>
    </nav>
  );
}
