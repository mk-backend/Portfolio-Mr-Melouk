"use client";
import React from "react";
import Link from "next/link";

const WorkLinksSection = () => {
  return (
    <div className="text-center text-[#ADB7BE] mb-8">
      <p className="mb-2">Voici une sélection de mes projets.</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>Retrouvez l&apos;ensemble de mes travaux sur mon</span>
        <Link href="https://github.com/Mouhsine93" className="text-white hover:text-indigo-300 underline">
          GitHub
        </Link>
        <span>&amp;</span>
        <Link href="https://gitlab.com/Mouhsine93" className="text-white hover:text-indigo-300 underline">
          GitLab
        </Link>
      </div>
    </div>
  );
};

export default WorkLinksSection;
