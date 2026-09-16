"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import GitlabIcon from "../../../public/gitlab-icon.svg";

const WorkLinksSection = () => {
  return (
    <div className="text-center text-white text-base lg:text-lg mb-8 flex flex-wrap items-center justify-center gap-2">
      <span>Mes travaux, seul et en groupe, sont disponibles sur mon</span>
      <Link href="https://github.com/Mouhsine93" className="inline-flex items-center gap-1 hover:text-indigo-300">
        <Image src={GithubIcon} alt="Github Icon" width={22} height={22} /> GitHub
      </Link>
      <span>et</span>
      <Link href="https://gitlab.com/Mouhsine93" className="inline-flex items-center gap-1 hover:text-indigo-300">
        <Image src={GitlabIcon} alt="Gitlab Icon" width={26} height={24} /> GitLab
      </Link>
    </div>
  );
};

export default WorkLinksSection;
