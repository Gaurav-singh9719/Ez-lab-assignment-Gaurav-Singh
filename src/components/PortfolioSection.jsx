import React from "react";
import portfolioData from "../data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-navy mb-10">Their Stories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
