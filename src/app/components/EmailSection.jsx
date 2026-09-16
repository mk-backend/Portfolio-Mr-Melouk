"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import GitlabIcon from "../../../public/gitlab-icon.svg";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Lumière derrière */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-[#18191E] rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Contenu texte */}
      <h5 className="text-4xl font-bold text-white my-2">Contactez-moi</h5>
      <p className="text-[#ADB7BE] mb-4 w-full flex flex-wrap items-center gap-2">
        <span>L&apos;ensemble de mes travaux, seul ou en groupe, est disponible sur</span>
        <Link href="https://github.com/Mouhsine93" className="inline-flex items-center gap-1 text-white hover:text-indigo-300">
          <Image src={GithubIcon} alt="Github Icon" width={22} height={22} /> GitHub
        </Link>
        <span>et</span>
        <Link href="https://gitlab.com/Mouhsine93" className="inline-flex items-center gap-1 text-white hover:text-indigo-300">
          <Image src={GitlabIcon} alt="Gitlab Icon" width={26} height={24} /> GitLab
        </Link>
      </p>

      {/* Bouton mailto: */}
      <div className="mt-4 z-10">
        <button
          onClick={() => {
            window.location.href =
              "mailto:mouhsine.m@hotmail.fr?subject=Bonjour&body=Bonjour, je souhaite vous contacter !";
          }}
          className="bg-indigo-500 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Me contacter par email
        </button>

       
      </div>
    </section>
  );
};

export default EmailSection;
