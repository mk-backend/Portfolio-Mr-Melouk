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
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>PHP</li>
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
          <p className="text-base lg:text-lg">
          Avec mes compétences, je mets ma créativité, ma rigueur et ma persévérance au service d’une équipe pour développer des solutions efficaces et adaptables aux nouveaux défis.
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
