import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col justify-between min-h-[200px]">
        <div>
          <h3 className="text-2xl font-serif text-navy mb-3">{title}</h3>
          <p className="text-sm text-navy/70 leading-relaxed mb-5">
            {description}
          </p>
        </div>

        <Link
          to={link}
          className="text-accent font-medium hover:text-navy transition-colors inline-flex items-center gap-2"
        >
          Explore Now →
        </Link>
      </div>
    </div>
  );
}
