import heroVideo from "@/assets/hero-video.mp4";
import heroVideoDesktop from "@/assets/hero-video-desktop.webm";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const videoSrc = isMobile ? heroVideo : heroVideoDesktop;

  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20 bg-muted">
      <div className="relative w-full">
        <video
          key={videoSrc}
          src={videoSrc}
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
