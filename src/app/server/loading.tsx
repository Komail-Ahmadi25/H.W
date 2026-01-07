import React from "react";

export default function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-60 w-60 rounded-full animate-spin border-b-5 border-dotted border-t-5 border-r-5 bg-clip-border border-gray-300"></div>
    </div>
  );
}
