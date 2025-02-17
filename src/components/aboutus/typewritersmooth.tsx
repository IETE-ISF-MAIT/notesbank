"use client";
import { TypewriterEffectSmooth } from "../aboutus/typewriter-effect";    
export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Simplify", className: "text-white" },
  { text: "your", className: "text-white" },
  { text: "BTech", className: "text-white" },
  { text: "journey", className: "text-white" },
  { text: "with", className: "text-white" },
    {
      text: "IETE Notesbank.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       
      </div>
    </div>
  );
}
