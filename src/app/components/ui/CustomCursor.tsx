"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        className="fixed w-10 h-10 rounded-full border-2 border-primary-500 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      />
      <div
        className="fixed w-2 h-2 rounded-full bg-gray-200 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
