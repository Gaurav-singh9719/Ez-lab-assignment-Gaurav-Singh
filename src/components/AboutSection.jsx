import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-bgpeach bg-texture py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="/images/about/about-main.png"
            alt="About V Films"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-serif text-navy mb-6">Our Story</h2>
          <p className="text-accent font-semibold mb-4">
            Listening is where our films begin.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Founded in 2009, V Films was born from a belief that every story
            deserves to be told with honesty and heart. Our approach to film,
            art, and branding is guided by empathy — by seeing the world through
            another’s eyes. We’ve worked with voices from across the country,
            capturing moments that move, heal, and inspire.
          </p>
          <button className="btn-accent mt-2">Know More</button>
        </div>
      </div>
    </section>
  );
}
