"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-300">
              Bonjour, je suis{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mouhsine",
                1000,
                "Développeur Backend Junior",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Diplômé en Architecte des systèmes d&#39;information option logiciel en bac +5, <br/> je suis à la recherche d&#39;un poste de développeur backend junior.
          </p>
          <div>
          {/*   
      <a
  href="/CV_Mouhsine_Melouk.pdf"
  download
  onClick={(e) => {
    const confirmed = window.confirm("Voulez-vous télécharger le CV ?");
    if (!confirmed) {
      e.preventDefault();
    }
  }}
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-500 to-sky-300 hover:bg-slate-800 text-white mt-3"
>
   <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Télécharger CV
  </span> 
</a>*/}





          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;