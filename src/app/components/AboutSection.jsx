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
      <div className="space-y-4">
        <div>
          <p className="text-sm text-[#ADB7BE] mb-1">Backend</p>
          <ul className="list-disc pl-2 grid grid-cols-2 gap-x-6">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
            <li>PHP</li>
            <li>Symfony</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-[#ADB7BE] mb-1">Outils &amp; tests</p>
          <ul className="list-disc pl-2 grid grid-cols-2 gap-x-6">
            <li>API REST</li>
            <li>Git</li>
            <li>Maven</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>JUnit</li>
            <li>Mockito</li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-[#ADB7BE] mb-1">Frontend</p>
          <ul className="list-disc pl-2 grid grid-cols-2 gap-x-6">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Tailwindcss</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </div>
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
  className="mx-auto md:mx-0 w-full max-w-[400px] h-auto"
  unoptimized />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl  font-bold text-white mb-4 text-center"><br />À propos</h2>
          <p className="text-[#ADB7BE]">
          Après une reconversion professionnelle et deux diplômes obtenus au CFA INSTA via des projets académiques, j&#39;ai développé une expérience concrète en développement backend, de la conception aux tests d&#39;intégration. En stage, j&#39;ai par exemple résolu une collision de migrations de base de données avec un autre module de l&#39;équipe, en coordonnant la renumérotation avec mes collègues. J&#39;accorde une grande importance au travail en équipe : comprendre les besoins des autres métiers, communiquer clairement, et avancer collectivement plutôt que seul. J&#39;intègre aussi l&#39;IA (Claude) à mon flux de travail, en restant garant de la qualité et de la compréhension du code produit.
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
