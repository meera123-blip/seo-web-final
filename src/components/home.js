import React from 'react';
import useUrlValidation from './useUrlValidation';
import { Link, useNavigate } from 'react-router-dom';



function Home() {
  const { url, isValidUrl, handleUrlChange } = useUrlValidation();
  let domain = "";
  if (url && isValidUrl) {
    const newUrl = new URL(url);
    domain = newUrl.hostname + newUrl.pathname;
  }
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (isValidUrl) {
      navigate(`/${domain}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
      <form
        className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
      >
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={handleUrlChange}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 flex-grow"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        >
           <Link to={`/${domain}`}>Get a free SEO audit report</Link>
        </button>
      </form>
      <div className="mt-2">
        {isValidUrl ? null : (
          <p className="text-red-500">Please enter a valid domain name.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
