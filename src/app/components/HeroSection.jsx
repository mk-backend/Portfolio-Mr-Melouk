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
                "Développeur Java / Spring Boot",
                1000,
                "Développement assisté par IA",
                1000,
              ]}
              wrapper="span"
              className="block min-h-[3.34em] sm:min-h-[2em] lg:min-h-[3em]"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Diplômé d&#39;un Bac+5 en architecture des systèmes d&#39;information, <br/> je suis à la recherche d&#39;un poste de développeur Java / Spring Boot, avec une pratique du développement assisté par IA.
          </p>
          <div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;