import React from 'react';

const PageLoadingCircle = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default PageLoadingCircle;
