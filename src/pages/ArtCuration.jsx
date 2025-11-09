import React from "react";

export default function ArtCuration() {
  return (
    <div className="min-h-screen bg-bgpeach bg-texture px-8 py-20">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-serif text-navy mb-6">
            Art Curation
          </h1>
          <p className="text-accent font-semibold mb-4">
            Where aesthetics meet narrative.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Curation is more than selection — it’s storytelling through art.
            At V Films, we work with artists, galleries, and collectors to craft
            experiences that spark thought and emotion. Every piece is placed
            with intention, every story told with care.
          </p>

          <button className="btn-accent mt-2">Discover More</button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/images/services/art-curation-main.png"
            alt="Art Curation Display"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <img
            src="/images/services/art-frame-overlay.png"
            alt="Decorative Element"
            className="absolute -bottom-8 -right-8 w-32 opacity-50"
          />
        </div>
      </section>

      {/* Sub Section */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
          Curating Stories Beyond Walls
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Art speaks a language that words cannot. We bring together visual
          harmony and human emotion to create immersive art experiences that
          transcend boundaries — merging beauty with meaning.
        </p>
      </section>
    </div>
  );
}
