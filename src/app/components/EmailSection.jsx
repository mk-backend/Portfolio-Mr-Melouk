"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import GitlabIcon from "../../../public/gitlab-icon.svg";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const responseText = await response.text();
    console.log(responseText); // Vérifiez la réponse ici
    
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error("Error:", resData.error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
<div className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-[#18191E] rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2`}></div>     
        <h5 className="text-4xl font-bold text-white my-2">
        Contactez-moi
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous souhaitiez simplement me dire bonjour, je ferai de mon mieux pour vous répondre.
        </p>
        <div className="socials flex flex-row gap-2 ">
        <Link href="https://github.com/Mouhsine93">
    <Image src={GithubIcon} alt="Github Icon" />
  </Link>
  
  <Link href="https://gitlab.com/Mouhsine93">
    <Image src={GitlabIcon} alt="Gitlab Icon" width={50} height={48} />
  </Link>
        
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email envoyé avec succès!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
             <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Votre Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                 placeholder="Votre_email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Ajouter un objet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Je voudrais..."
              />
            </div> <div className="z-10">
            <div className="mb-6"> 
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium z-2"
              >
                Votre Message
              </label> 
              <textarea
                name="message" 
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Parlons de..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer le Message
            </button></div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;