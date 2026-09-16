/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>Tailwindcss</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>PHP</li>
        <li>Symfony</li>
        <li>MySQL</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Cycle en V</li>
        <li>Kanban</li>
        <li>Extreme Programming (XP)</li>
        <li>UML</li>
        <li>Merise</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CFA INSTA - Formation Informatique</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-14 xl:px-52">
        <Image src="/images/image2.jpg" width={400} height={100} alt="photo"
  unoptimized />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl  font-bold text-white mb-4 text-center"><br />À propos</h2>
          <p className="text-[#ADB7BE]">
          Après une reconversion professionnelle et deux diplômes obtenus au CFA INSTA via des projets académiques, j&#39;ai développé une expérience concrète en développement backend à travers plusieurs projets, de la conception à la mise en production. J&#39;utilise aussi des outils d&#39;IA (Claude, Copilot) pour accélérer mon travail, tout en gardant la maîtrise de ce que je produis. J&#39;accorde une grande importance au travail en équipe : comprendre les besoins des autres métiers, communiquer clairement, et avancer collectivement plutôt que seul.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Gestion{" "}
            </TabButton>
            {<TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Formation{" "}
  </TabButton>}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
