"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const subjects = [
  { title: "Computational Methods", link: "https://example.com/science" },
  { title: "Digital Logic and Computer Design", link: "https://example.com/social-studies" },
  { title: "Discrete Mathematics", link: "https://example.com/maths" },
  { title: "Data Structure", link: "https://example.com/computer" },
  { title: "Indian Knowledge System", link: "https://example.com/drawing" },
  { title: "Object Oriented Programming", link: "https://example.com/eng-vocabulary" },
];


export default function SubjectsPage() {
  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center relative">
      {/* Back Arrow Button */}
      <Link href="/" passHref>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-6 left-6 p-2 bg-gray-900/[0.6] rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:shadow-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.div>
      </Link>

      {/* Animated Headings (Side by Side) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-row items-center justify-center gap-6 mb-10"
      >
        <div className="w-64 py-4 px-6 bg-gray-900/[0.6] rounded-lg shadow-md backdrop-blur-lg text-gray-300 text-3xl font-bold font-mono uppercase tracking-wide text-center transition-all duration-300 hover:text-white hover:shadow-blue-500 hover:shadow-lg">
          <h2>IT</h2>
        </div>
        <div className="w-64 py-4 px-6 bg-gray-900/[0.6] rounded-lg shadow-md backdrop-blur-lg text-gray-300 text-3xl font-bold font-mono uppercase tracking-wide text-center transition-all duration-300 hover:text-white hover:shadow-blue-500 hover:shadow-lg">
          <h2>Semester 3</h2>
        </div>
      </motion.div>

      {/* Subject Cards with Hover Effect */}
      <HoverEffect items={subjects} />
    </div>
  );
}

// export default function SubjectsPage() {
//   return (
//     <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center">
//       {/* Animated Headings (Side by Side) */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="flex flex-row items-center justify-center gap-6 mb-10"
//       >
//         <div className="w-64 py-4 px-6 bg-gray-900/[0.6] rounded-lg shadow-md backdrop-blur-lg text-gray-300 text-3xl font-bold font-mono uppercase tracking-wide text-center transition-all duration-300 hover:text-white hover:shadow-blue-500 hover:shadow-lg">
//           <h2>IT</h2>
//         </div>
//         <div className="w-64 py-4 px-6 bg-gray-900/[0.6] rounded-lg shadow-md backdrop-blur-lg text-gray-300 text-3xl font-bold font-mono uppercase tracking-wide text-center transition-all duration-300 hover:text-white hover:shadow-blue-500 hover:shadow-lg">
//           <h2>Semester 3</h2>
//         </div>
//       </motion.div>

//       {/* Subject Cards with Hover Effect */}
//       <HoverEffect items={subjects} />
//     </div>
//   );
// }
