import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md">
      {/* Glowing animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 opacity-30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-[#ffb6d9] to-[#c5c9fc] opacity-20 blur-[100px] rounded-full animate-pulse" />
      </div>

      {/* Cursive animated name - lighter gradient */}
      <h1 className="text-5xl md:text-6xl font-cursive text-white bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text animate-pulse opacity-90">
        KhushbuParmar
      </h1>

      {/* Elegant bouncing dots below */}
      <div className="mt-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-pink-300 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 rounded-full bg-purple-300 animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 rounded-full bg-indigo-300 animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loader;
