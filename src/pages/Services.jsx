import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Film Production",
      description:
        "From concept to final cut, our film production team brings your vision to life with cinematic storytelling and technical excellence.",
      image: "/images/services/film-production.png",
      link: "/film-production",
    },
    {
      title: "Branding",
      description:
        "We craft cohesive visual and verbal brand identities that resonate — blending strategy, creativity, and cultural insight.",
      image: "/images/services/branding.png",
      link: "/branding",
    },
    {
      title: "Art Curation",
      description:
        "From installations to creative showcases, our art curation service bridges imagination with meaning and audience connection.",
      image: "/images/services/art-curation.png",
      link: "/art-curation",
    },
  ];

  return (
    <section className="bg-bgpeach py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
          Our Services
        </h2>
        <p className="text-navy/70 text-base md:text-lg max-w-2xl mx-auto">
          We blend creativity and purpose — crafting films, brands, and art that
          move people and inspire stories worth remembering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
