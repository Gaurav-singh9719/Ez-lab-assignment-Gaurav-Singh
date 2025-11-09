import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center px-8 py-16 md:py-28 text-center md:text-left overflow-hidden bg-bgpeach bg-texture">
      {/* Mandala background */}
      <img
        src="/images/hero/mandala-bg.svg"
        alt="Mandala Background"
        className="absolute opacity-20 -z-10 top-10 left-1/2 transform -translate-x-1/2 w-[500px]"
      />

      {/* Left Logo / Title */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end mb-10 md:mb-0">
        <h2 className="text-7xl font-serif font-semibold text-navy relative">
          <span className="text-accent text-8xl">V</span> Films
        </h2>
      </div>

      {/* Right content */}
      <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
        <h3 className="font-script text-3xl md:text-4xl text-navy mb-6 leading-snug">
          Varnan is where stories find <br /> their voice and form
        </h3>

        <p className="text-accent font-serif text-lg mb-6">
          Films . Brands . Art
        </p>

        <p className="max-w-lg text-sm md:text-base leading-relaxed text-gray-800">
          Since 2009, V’ve been telling stories – stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way – by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories – V honors them.
        </p>
      </div>
    </section>
  );
}
