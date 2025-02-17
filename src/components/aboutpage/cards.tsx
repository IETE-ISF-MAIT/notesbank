"use client";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  author: string;
  avatar: string;
  imageUrl: string;
}

export function CardDemo({ title, description, author, avatar, imageUrl }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className="cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 transition duration-300 group-hover/card:opacity-70"></div>

        {/* Author Info */}
        <div className="relative z-10 flex flex-row items-center space-x-4">
          <Image
            height={40}
            width={40}
            alt="Avatar"
            src={avatar}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50">{author}</p>
            <p className="text-sm text-gray-300">2 min read</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 text-white">
          <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
          <p className="font-normal text-sm my-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
