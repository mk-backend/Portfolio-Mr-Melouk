"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center my-12 py-24 gap-4 relative"
    >
      {/* Lumière derrière */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-[#18191E] rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contenu texte */}
      <h5 className="text-4xl font-bold text-white my-2 z-10">Contactez-moi</h5>
      <p className="text-[#ADB7BE] mb-2 max-w-md z-10">
        Ma boîte de réception est toujours ouverte. Je suis à votre écoute pour toute question ou collaboration.
      </p>

      {/* Bouton mailto: */}
      <button
        onClick={() => {
          window.location.href =
            "mailto:mouhsine.m@hotmail.fr?subject=Bonjour&body=Bonjour, je souhaite vous contacter !";
        }}
        className="bg-indigo-500 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg z-10"
      >
        Me contacter par email
      </button>
    </section>
  );
};

export default EmailSection;
