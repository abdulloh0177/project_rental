import React from "react";

export const PropertyCardsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title placeholder (optional) */}
      <div className="mb-8 text-center">
        <div className="h-8 w-64 mx-auto mb-2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-96 mx-auto bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Grid of property cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Repeat this card skeleton 3 times */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            {/* Image skeleton */}
            <div className="relative">
              <div className="aspect-[4/3] w-full bg-gray-200 animate-pulse"></div>

              {/* Badge skeletons */}
              <div className="absolute left-3 top-3">
                <div className="h-6 w-20 bg-blue-200 rounded animate-pulse"></div>
              </div>
              <div className="absolute right-3 top-3">
                <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Avatar skeleton */}
              <div className="absolute -bottom-4 right-4">
                <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white animate-pulse"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-1"></div>

              {/* Location */}
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>

              {/* Features */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4].map((feature) => (
                  <div key={feature} className="flex flex-col items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mb-1"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-1"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-2">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot === 1 ? "bg-blue-600" : "bg-gray-200"
            } animate-pulse`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCardsSkeleton;
