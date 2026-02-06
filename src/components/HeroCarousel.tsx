import heroVideo from "@/assets/hero-video.mp4";

const HeroCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20 bg-muted">
      <div className="relative w-full">
        <video
          src={heroVideo}
          className="w-full h-auto object-contain max-h-[70vh]"
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
