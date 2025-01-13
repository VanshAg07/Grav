import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import img from "../img/5.jpg";

const LegacySection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Start counting when 50% of the component is in view
    );
    
    const section = document.getElementById("legacy-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="legacy-section"
      className="bg-black mb-10 text-white relative overflow-hidden min-h-[600px]"  // Increased the minimum height
    >
      <div className="absolute inset-0">
        {/* Background image */}
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 px-6 py-12 md:px-20 lg:px-32 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Legacy</h1>
        <p className="text-lg mb-12">
          Rajat Agrawal, a first-generation entrepreneur, founded Gravita in
          1992 after recognizing the significant potential worldwide for
          recycling lead.
        </p>

        <div className="grid pt-24 grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cards for Metrics */}
          {[{ label: "Orders Booked", value: 60000, suffix: "MT+" },
            { label: "Production Capacity", value: 308000, suffix: "MT+" },
            { label: "Scrap Collected", value: 250000, suffix: "MT+" },
            { label: "Recycled Resources Supplied", value: 169000, suffix: "MT+" }
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6"
            >
              <CountUp
                start={0}
                end={inView ? stat.value : 0}
                duration={4} // Smoother count
                separator=","
                className="text-3xl font-bold"
                useEasing={true} // Smooth transition
              />
              <span className="text-xl mt-2">{stat.suffix}</span>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
