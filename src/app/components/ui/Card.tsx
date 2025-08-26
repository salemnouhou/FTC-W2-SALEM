import React, { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

type CardVariant = "testimonial" | "benefits" | "default";

interface CardProps {
  variant?: CardVariant;
  children?: ReactNode;
  image?: string;      
  title?: string;      
  description?: string;
  author?: string;  
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  children,
  image,
  title,
  description,
  author,
  className,
}) => {
  let content;

  if (variant === "testimonial") {
    content = (
      <div className="bg-primary/10 text-primary shadow-lg rounded-xl p-6 border-l-4 border-primary">
        <p className="italic">{description}</p>
        {author && <span className="block mt-2 font-semibold">- {author}</span>}
      </div>
    );
  } else if (variant === "benefits") {
    content = (
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 flex flex-col items-center">
        {image && <Image src={image} alt="title" className="w-full h-48 object-cover rounded-lg mb-4" />}
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    );
  } else {
    content = (
      <div className="bg-white shadow-md rounded-lg p-4">
        {children}
      </div>
    );
  }

  return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
};
