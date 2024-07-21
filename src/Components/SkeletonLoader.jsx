import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      {/* Header Skeleton */}
      <div className="bg-white shadow-md p-4 mb-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      {/* Showcase Skeleton */}

      <div className="mx-auto max-w-7xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <div className="animate-pulse h-40 bg-gray-300 rounded"></div>
              <div className="mt-4">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cards Skeleton */}
      <div className="mx-auto max-w-7xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <div className="animate-pulse h-40 bg-gray-300 rounded"></div>
              <div className="mt-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
