import Link from "next/link";

function Homepage() {
  return (
    <div className="w-full  flex flex-col items-center justify-center 
    overflow-hidden mx-auto py-10 bg-black min-h-[70vh]">
      
      <div className="text-center w-full p-5 relative z-10">
        
        
        <h1 className="relative text-4xl md:text-6xl font-bold 
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 
          shadow-[0_0_50px_rgba(255,255,255,0.3)]">
          WELCOME TO NOTESBANK
        </h1>
       
        
        <p className="mt-4 font-normal text-base md:text-lg mx-auto text-neutral-400 max-w-lg">
          📚 Simplify your BTech journey with <strong>NotesBank</strong>! Get access to well-organized notes, 
          previous year questions (PYQs), and reference materials for all eight semesters. 
          Explore resources across multiple branches and ace your exams with ease. 🚀
        </p>

      </div>

    </div>
  );
}

export default Homepage;
