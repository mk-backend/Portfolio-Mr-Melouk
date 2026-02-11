"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
 {
    id: 1,
    title: "Modernisation AlphaRetail",
    description: "Modernisation d’une application de gestion des stocks en PHP legacy, réduisant les erreurs de 60 % et améliorant la satisfaction utilisateur de 75 %",
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
    description: "Conception et développement d’un blog sécurisé utilisé par plus de 15 membres, garantissant fiabilité et confidentialité",
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
  description: "Site web en Vue.js permettant de collecter des dons, diffuser des informations pertinentes et partager les réseaux sociaux de l’association",
  image: "/images/projects/2.png",
  tag: ["All", "Web", "Mobile"],
  gitUrl: "https://gitlab.com/Mouhsine93/uneurosolidarite",
  previewUrl: "https://uneurosolidarite.netlify.app"
},

  {
    id: 4,
    title: "Galerie d'image en ligne de la planète Mars ",
    description: "Application Angular avec l'API de la NASA",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Mouhsine93/elon-mars-2",
    previewUrl: "https://e-lonmars.netlify.app",
  },
 {
    id: 5,
    title: "E-Commerce",
    description: "Application Angular pour mobile en e-commerce pour le site officiel \"Le Bateau de Thibault\"",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mouhsine93/bateau-thibaut",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Jeu de dames",
    description: "Projet Python",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mouhsine93/Jeu-de-dames",
    previewUrl: "/",
  },


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
);


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects"><br/><br/><br/>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-1">
        Mes Projets
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
  <motion.li
    key={`${project.id}-${tag}`}  // Ajoutez la propriété tag ici
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