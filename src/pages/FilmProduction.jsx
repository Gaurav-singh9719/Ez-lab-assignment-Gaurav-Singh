import React from "react";

export default function FilmProduction() {
  return (
    <div className="min-h-screen bg-bgpeach bg-texture px-8 py-20">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-serif text-navy mb-6">
            Film Production
          </h1>
          <p className="text-accent font-semibold mb-4">
            Storytelling that moves people.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Every frame we craft holds a world within it. From concept to
            screen, our film production team weaves emotion, sound, and
            imagery into unforgettable narratives. Whether it’s a documentary
            that explores unseen truths or a brand film that humanizes your
            message — we make stories that stay.
          </p>

          <button className="btn-accent mt-2">Explore Our Work</button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/images/services/film-production-main.png"
            alt="Film Production"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <img
            src="/images/services/film-frame-overlay.png"
            alt="Decorative Overlay"
            className="absolute -bottom-8 -left-8 w-32 opacity-60"
          />
        </div>
      </section>

      {/* Sub Section */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
          The Art of Visual Storytelling
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          From pre-production ideation and direction to on-location shooting and
          editing, our approach remains simple — capture truth, not performance.
          The camera is our pen, and emotion is our language.
        </p>
      </section>
    </div>
  );
}
