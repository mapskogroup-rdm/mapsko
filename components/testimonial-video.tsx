"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  poster?: string;
  title?: string;
};

type PlayEventDetail = { id: string };

export default function TestimonialVideo({
  src,
  className,
  poster,
  title,
}: Props) {
  const instanceId = useId();
  const videoId = `testimonial-video-${instanceId}`;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchLike, setIsTouchLike] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    // Show the overlay affordance on devices that don't support hover (touch).
    if (typeof window === "undefined") return;
    const mql = window.matchMedia?.("(hover: none)");
    const update = () => setIsTouchLike(Boolean(mql?.matches));
    update();
    mql?.addEventListener?.("change", update);
    return () => mql?.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onOtherVideoPlay = (event: Event) => {
      const detail = (event as CustomEvent<PlayEventDetail>).detail;
      if (!detail || detail.id === instanceId) return;
      videoRef.current?.pause();
    };

    window.addEventListener(
      "testimonial-video-play",
      onOtherVideoPlay as EventListener
    );
    return () =>
      window.removeEventListener(
        "testimonial-video-play",
        onOtherVideoPlay as EventListener
      );
  }, [instanceId]);

  const requestPlay = async () => {
    if (!videoRef.current) return;

    // Ensure only one testimonial plays at a time.
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent<PlayEventDetail>("testimonial-video-play", {
          detail: { id: instanceId },
        })
      );
    }

    // If ended, replay from the start.
    if (videoRef.current.ended) videoRef.current.currentTime = 0;

    try {
      await videoRef.current.play();
    } catch {
      // Ignore (e.g. browser blocks playback) — user can try again.
    }
  };

  const togglePlayback = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) return requestPlay();
    videoRef.current.pause();
  };

  const showOverlay = !isPlaying && (isHovering || isTouchLike);

  return (
    <div
      className={[
        "group relative isolate overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 shadow-[0_18px_50px_-25px_rgba(0,0,0,0.65)]",
        "transition-transform duration-300 will-change-transform hover:-translate-y-0.5",
        className ?? "",
      ].join(" ")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        id={videoId}
        ref={videoRef}
        src={src}
        poster={poster}
        className="block h-full w-full object-cover"
        playsInline
        preload="metadata"
        controls={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
      />

      {/* Click target (no timeline UI) */}
      <button
        type="button"
        aria-controls={videoId}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlayback}
        className="absolute cursor-pointer inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
      >
        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      </button>

      {/* Center play affordance (hover when paused/ended; always visible on touch). */}
      <div
        className={[
          "pointer-events-none absolute inset-0 z-20 grid place-items-center",
          "transition-opacity duration-200",
          showOverlay ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="rounded-full bg-black/40 p-5 backdrop-blur-sm ring-1 ring-white/20 shadow-lg">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="white" fillOpacity="0.95" />
          </svg>
        </div>
      </div>

      {/* Subtle gradient for readability + hover polish */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-black/0 opacity-80" />

      {isBuffering ? (
        <div className="pointer-events-none absolute inset-0 z-30 grid place-items-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white/90" />
        </div>
      ) : null}

      {title ? (
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-30">
          <p className="text-white/90 text-sm font-medium drop-shadow">
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}
