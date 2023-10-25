import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
      <div
        className="bg-purple-500 animate-pulse h-2.5 rounded-full dark:bg-blue-500"
        style={{ width: progress + "%" } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default ProgressBar;
