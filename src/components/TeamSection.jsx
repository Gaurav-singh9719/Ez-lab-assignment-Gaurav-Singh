import React from "react";
import teamData from "../data/teamData";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-navy mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-bgpeach p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm text-accent">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
