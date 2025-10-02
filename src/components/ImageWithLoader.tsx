"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {isLoading && (
        <div
          className={`skeleton absolute inset-0 rounded-lg ${className || ""}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
