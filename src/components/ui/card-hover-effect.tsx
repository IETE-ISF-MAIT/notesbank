"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15 },
        },
      }}
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6", className || "")}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item?.link}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-800/[0.8] block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-[150px] w-[90%] mx-auto p-4 overflow-hidden bg-black border border-transparent relative z-20 transition-all duration-300 group",
        "border-[#4682b4]",
        "group-hover:border-black",
        className || ""
      )}
    >
      <div className="relative z-50 flex items-center justify-center h-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-300 text-2xl font-mono uppercase tracking-wide text-center transition-all duration-300",
        "group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-400",
        className || ""
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-4 text-gray-400 tracking-wide leading-relaxed text-sm", className || "")}>
      {children}
    </p>
  );
};


// "use client";   
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6",className||""
//       )}
//     >
//       {items.map((item, idx) => (
//         <Link
//           href={item?.link}
//           key={item?.link}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-gray-800/[0.8] block rounded-2xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-xl h-[150px] w-[90%] mx-auto p-4 overflow-hidden bg-black border border-transparent relative z-20 transition-all duration-300 group",
//         "border-[#4682b4]",
//         "group-hover:border-black"
//         ,
//         className||""
//       )}
//     >
//       <div className="relative z-50 flex items-center justify-center h-full">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-gray-300 text-2xl font-mono uppercase tracking-wide text-center transition-all duration-300",
//         "group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-400", className||"")}>
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-4 text-gray-400 tracking-wide leading-relaxed text-sm",
//         className||""
//       )}
//     >
//       {children}
//     </p>
//   );
// };
