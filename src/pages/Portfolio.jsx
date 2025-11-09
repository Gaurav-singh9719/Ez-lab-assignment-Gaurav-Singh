import React from "react";

export default function Portfolio() {
  return (
    <section className="relative min-h-screen bg-bgpeach overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/portfolio/portfolio-main.png"
        alt="Portfolio Showcase"
        className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-2xl shadow-lg transition-transform duration-700 ease-in-out hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Their <span className="text-accent">Stories</span>
        </h1>
        <p className="font-script text-2xl md:text-3xl max-w-2xl leading-relaxed">
          Frames that breathe emotion, stories that linger beyond the frame.
        </p>
      </div>
    </section>
  );
}
