import React from "react";

// Skeleton component to show loading placeholders using Tailwind CSS and animate-pulse
const Skeleton = () => {
  return (
    // The outer container with animate-pulse for shimmer effect
    <div role="status" className="space-y-2.5 animate-pulse w-full">
      
      {/* Each block represents a row of skeleton lines mimicking content */}
      {/* Line Group 1 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>

      {/* Line Group 2 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      </div>

      {/* Line Group 3 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>

      {/* Line Group 4 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      </div>

      {/* Line Group 5 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
      </div>

      {/* Line Group 6 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>

      {/* Line Group 7 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>

      {/* Line Group 8 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      </div>

      {/* Line Group 9 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>

      {/* Line Group 10 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      </div>

      {/* Line Group 11 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
      </div>

      {/* Line Group 12 */}
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1" />
      </div>
    </div>
  );
};

export default Skeleton;
