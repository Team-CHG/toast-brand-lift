import { useEffect, useRef } from "react";

interface TransparentVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a video on a canvas with black background removed via pixel manipulation.
 * Black pixels become transparent; colored pixels remain vibrant.
 */
export default function TransparentVideo({ src, className, style }: TransparentVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.preload = "auto";
    videoRef.current = video;

    const draw = () => {
      if (video.paused || video.ended) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 640;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Green-screen removal: detect pixels where green dominates
        const greenDominance = g - Math.max(r, b);
        const brightness = (r + g + b) / 3;

        if (greenDominance > 40 && g > 80) {
          // Strong green — fully transparent
          data[i + 3] = 0;
        } else if (greenDominance > 15 && g > 60) {
          // Edge pixels with some green — fade out proportionally
          const alpha = 255 - Math.min(255, ((greenDominance - 15) / 25) * 255);
          data[i + 3] = Math.max(0, alpha);
          // Remove green spill from edge pixels
          data[i + 1] = Math.min(g, Math.max(r, b));
        } else if (brightness > 240 && greenDominance > 5) {
          // Near-white with green tint (bright green screen areas)
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(frame, 0, 0);
      rafRef.current = requestAnimationFrame(draw);
    };

    video.addEventListener("canplay", () => {
      video.play().catch(() => {});
      rafRef.current = requestAnimationFrame(draw);
    });

    video.load();

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.pause();
      video.removeAttribute("src");
      video.load();
      videoRef.current = null;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={style}
    />
  );
}
