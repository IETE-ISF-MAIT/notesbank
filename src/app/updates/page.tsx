
import { BackgroundBoxesDemo } from "@/components/aboutpage/back";
import { CardDemo } from "@/components/aboutpage/cards";
import { BoxesCore } from "@/components/ui/background-boxes";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {/* First Card */}
      <CardDemo
        title="Event Highlights"
        description="Latest updates on upcoming events."
        author="Vivaan Sihmar"
        avatar="/manu.png"
        imageUrl="https://images.unsplash.com/photo-1510442650500-93217e634e4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydGljbGV8ZW58MHx8MHx8fDA%3D"
      />

      {/* Second Card */}
      <CardDemo
        title="Tech Insights"
        description="Read the latest tech blogs and insights."
        author="vivaan sihmar"
        avatar="/avatar2.png"
        imageUrl="https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <BackgroundBoxesDemo/>
      <BoxesCore/>
    </div>
  );
};

export default Page;
