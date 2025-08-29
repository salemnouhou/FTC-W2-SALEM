"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ImageWithSkeletonProps } from "@/app/types";


export function ImageWithSkeleton({
  src,
  alt,
  className,
  skeletonClassName,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className={clsx(
            "absolute inset-0 rounded-md overflow-hidden",
            "bg-gradient-to-r from-gray-50 via-gray-00 to-primary-200",
            "animate-pulse",
            "before:absolute before:inset-0",
            "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            "before:dark:from-transparent before:dark:via-white/10 before:dark:to-transparent",
            "before:animate-shimmer before:-translate-x-full",
            skeletonClassName
          )}
          style={{
            backgroundSize: "200% 100%",
            animation: "skeleton-wave 2s ease-in-out infinite"
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        priority
        className={clsx(
          "object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />

      <style jsx>{`
        @keyframes skeleton-wave {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}