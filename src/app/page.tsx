"use client";

import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Color Flipper 🎨
      </h1>
      <p className="text-lg mb-6">Current Color: {color}</p>
      <button
        onClick={generateRandomColor}
        className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
      >
        Flip Color
      </button>
    </div>
  );
}
