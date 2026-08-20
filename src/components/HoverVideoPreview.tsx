"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type HoverVideoPreviewProps = {
  src: string;
  poster: string;
  alt: string;
};

export function HoverVideoPreview({ src, poster, alt }: HoverVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    void videoRef.current?.play();
  };

  const reset = () => {
    const video = videoRef.current;
    setIsPlaying(false);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="work-card-preview" onMouseEnter={play} onMouseLeave={reset}>
      <video
        ref={videoRef}
        className="work-card-video"
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={`${alt} preview`}
      >
        <source src={src} type="video/mp4" />
      </video>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(min-width: 900px) 34vw, (min-width: 560px) 50vw, 100vw"
        className={`work-card-poster object-cover ${isPlaying ? "is-hidden" : ""}`}
        priority
      />
    </div>
  );
}
