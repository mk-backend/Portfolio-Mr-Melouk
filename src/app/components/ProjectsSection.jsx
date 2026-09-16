"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import WorkLinksSection from "./WorkLinksSection";
import { motion, useInView } from "framer-motion";

const projectsData = [
 {
    id: 1,
    title: "Modernisation AlphaRetail",
    description: "Cas d'étude simulé (projet de fin d'études, RNCP Niveau 7) : conception et développement d'une application de gestion des stocks, modernisant un système PHP legacy vers Symfony.",
    image: "/images/projects/3.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/Mouhsine93/Symfony",
    previewUrl: "/",
    technologies: {
      backEnd: "PHP, Symfony, MySQL, Apache",
      frontEnd: "Twig, Bootstrap, Chart.js",
      tools: "Cycle en V, UML, MVC, Git, Docker, PHPUnit, GitHub Actions, OVHcloud"
    }
  },

  {
    id: 2,
    title: "Blog communautaire Web & Mobile",
    description: "Conception et développement d'un blog communautaire sécurisé (projet de fin d'études, RNCP Niveau 6), garantissant fiabilité et confidentialité des données",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Mouhsine93/Blog-des-passionn-s/tree/main",
    previewUrl: "/",
    technologies: {
      backEnd: "PHP, MySQL, Uwamp",
      frontEnd: "HTML, CSS",
      tools: "Kanban, UML, Merise, InfinityFree"
    }
  },
{
  id: 3,
  title: "Association 1€ Solidarité",
  description: "Site web en Vue.js, toujours utilisé par l’association, permettant de collecter des dons, diffuser des informations pertinentes et partager les réseaux sociaux",
  image: "/images/projects/2.png",
  tag: ["All", "Web", "Mobile"],
  gitUrl: "https://gitlab.com/Mouhsine93/uneurosolidarite",
  previewUrl: "https://uneurosolidarite.netlify.app"
},
 {
    id: 4,
    title: "E-Commerce",
    description: "Projet académique : application Angular pour mobile en e-commerce, recréant la maquette du site \"Le Bateau de Thibault\"",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mouhsine93/bateau-thibaut",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Galerie d'image en ligne de la planète Mars ",
    description: "Application Angular avec l'API de la NASA",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Mouhsine93/elon-mars-2",
    previewUrl: "https://e-lonmars.netlify.app",
  },

  {
    id: 7,
    title: "Plateforme d'incubation Idea To Market",
    description: "Stage chez AriMayi. Rédaction des user stories, conception (UML : cas d'utilisation, classes, séquence) et développement backend Java/Spring Boot du module de gestion des livrables et notifications, intégration API avec l'équipe frontend web, sécurité (Spring Security, JWT) et tests d'intégration.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: {
      backEnd: "Java 21, Spring Boot, PostgreSQL, Spring Data JPA, Docker",
      tools: "UML, Spring Security, JWT, JUnit, Mockito, Postman, Git"
    }
  },


];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects"><br/><br/><br/>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        Mes Projets
      </h2>
      <WorkLinksSection />
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
      {projectsData.map((project, index) => (
  <motion.li
    key={project.id}
    variants={cardVariants}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    transition={{ duration: 0.3, delay: index * 0.4 }}
  >
    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      imgUrl={project.image}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      technologies={project.technologies}
    />
  </motion.li>

        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;