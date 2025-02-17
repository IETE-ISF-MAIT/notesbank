"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "./ui/BackgroundGradient";


const allBranches = [
  { name: "Computer Science", href: "/branches/cse" },
  { name: "Mechanical Engineering", href: "/branches/mechanical" },
  { name: "Information Technology", href: "/branches/it" },
  { name: "Electronics & Communication", href: "/branches/ece" },
  { name: "Electrical Engineering", href: "/branches/ee" },
  { name: "Civil Engineering", href: "/branches/civil" },
  { name: "Artificial Intelligence", href: "/branches/ai" },
  { name: "Artificial Intelligence & Data Science", href: "/branches/aids" },
];

const Branches = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedYears, setSelectedYears] = useState(
    allBranches.map(() => "1st Year")
  );
  const router = useRouter();

  const displayedBranches = showAll ? allBranches : allBranches.slice(0, 6);

  const handleYearChange = (index: number, year: string) => {
    const updatedYears = [...selectedYears];
    updatedYears[index] = year;
    setSelectedYears(updatedYears);
  };

  return (
    <div className="py-12 bg-slate-900 relative">
      
      <div className="text-center" >
        <h2 className="font-extrabold text-3xl bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 text-transparent tracking-wide">
          OUR BRANCHES
        </h2>
      </div>

      {/* Cards Section */}
      <div className="relative mt-10 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBranches.map((branch, index) => (
          //  Wrap 
          <BackgroundGradient key={index} className="rounded-xl p-[2px]">
            <div
              className="relative bg-slate-900 border border-white/20 p-6 rounded-xl shadow-md flex flex-col items-center w-full 
                        transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20 cursor-pointer"
              onClick={() => router.push(branch.href)}
            >
              
              <div className="absolute left-4 top-4">
                <select
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm"
                  value={selectedYears[index]}
                  onChange={(e) => handleYearChange(index, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              
              <h3 className="text-xl font-bold text-white mt-8">{branch.name}</h3>
              <p className="text-gray-200 mt-2 text-center">
                Explore notes, question papers, and PYQs for {branch.name} -{" "}
                {selectedYears[index]}.
              </p>
            </div>
          </BackgroundGradient>
        ))}
      </div>

      {/* View button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-extrabold px-6 py-3 bg-white text-blue-950 rounded-xl"
        >
          {showAll ? "VIEW LESS" : "VIEW MORE"}
        </button>
      </div>
    </div>
  );
};

export default Branches;