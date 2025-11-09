import React from "react";

export default function Branding() {
  return (
    <div className="min-h-screen bg-bgpeach bg-texture px-8 py-20">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/images/services/branding-main.png"
            alt="Branding Visual"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <img
            src="/images/services/branding-shape-overlay.png"
            alt="Decorative Accent"
            className="absolute -top-8 -right-8 w-32 opacity-50"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-serif text-navy mb-6">
            Branding
          </h1>
          <p className="text-accent font-semibold mb-4">
            Crafting identities that speak louder than words.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Every brand tells a story — not just through its logo or visuals,
            but through the emotion it evokes. At V Films, we create branding
            experiences that stay in hearts and minds. From naming and
            storytelling to visuals and campaigns, we build identities that
            breathe purpose and authenticity.
          </p>

          <button className="btn-accent mt-2">View Case Studies</button>
        </div>
      </section>

      {/* Sub Section */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
          Designing Meaningful Presence
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A brand is more than a visual identity — it’s the emotional resonance
          people carry after every interaction. We blend design and narrative to
          create brands that move beyond aesthetics, into human connection.
        </p>
      </section>
    </div>
  );
}
