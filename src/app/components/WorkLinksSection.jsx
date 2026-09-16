"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import GitlabIcon from "../../../public/gitlab-icon.svg";

const WorkLinksSection = () => {
  return (
    <div className="text-center text-[#ADB7BE] mb-8">
      <p className="mb-2">Voici une sélection de mes projets.</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>Retrouvez l&apos;ensemble de mes travaux sur mon</span>
        <Link href="https://github.com/Mouhsine93" className="inline-flex items-center gap-1 text-white hover:text-indigo-300">
          <Image src={GithubIcon} alt="Github Icon" width={22} height={22} /> GitHub
        </Link>
        <span>&amp;</span>
        <Link href="https://gitlab.com/Mouhsine93" className="inline-flex items-center gap-1 text-white hover:text-indigo-300">
          GitLab <Image src={GitlabIcon} alt="Gitlab Icon" width={26} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default WorkLinksSection;
