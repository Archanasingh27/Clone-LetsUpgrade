import React from "react";
import ProgramCard from "./ProgramCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainContent = () => {
  const programCards = [
    {
      title: "Explore Certificate Program",
      buttonText: "Get Certified",
      imgSrc: "https://storage.googleapis.com/a1aa/image/z5j1eatYYTz6OCNEQ7t9WsK2xfmXio0hDjZrmbJqHP5GvkenA.jpg",
      imgAlt: "Robotic hand shaking human hand",
    },
    {
      title: "Study Abroad Programs",
      buttonText: "Explore Program",
      imgSrc: "https://storage.googleapis.com/a1aa/image/54biHUg7MC4NFlMeG87HtE5KgWIOqdkTaEykaSr1pSLkXSfTA.jpg",
      imgAlt: "Statue of Liberty",
    },
    {
      title: "India's Best B.Tech CSE",
      buttonText: "Apply Now",
      imgSrc: "https://storage.googleapis.com/a1aa/image/Lvpxre2telrHvUzQd1nfRKPhSpWNaxfTQjdME2fBvtEc5l0fE.jpg",
      imgAlt: "Group of students",
    },
    {
      title: "B.Des in UI UX Program",
      buttonText: "Apply Now",
      imgSrc: "https://storage.googleapis.com/a1aa/image/sZebx7rtMWT9YqIrRkruUfJTO7EH30677VO2iPAB2SAKvkenA.jpg",
      imgAlt: "UI UX design sketches",
    },
  ];

  return (
    <main className="container mx-auto text-center py-32 px-6">
      <h1 className="text-5xl font-bold mb-4">
        Future Proof Your Career With
        <span className="text-orange-500"> LetsUpgrade</span>
      </h1>
      <p className="text-lg mb-8">
        Explore Tech, Design, Management, Business, Product and Data with LetsUpgrade. Learn directly from top Industry experts
      </p>
      <div className="flex flex-wrap justify-center space-x-4 mb-16">
        <span className="flex items-center space-x-2">
          <i className="fas fa-circle text-red-500"></i>
          <span>LIVE CLASSES</span>
        </span>
        <span className="flex items-center space-x-2">
          <i className="fas fa-circle text-blue-500"></i>
          <span>GET CERTIFIED</span>
        </span>
        <span className="flex items-center space-x-2">
          <i className="fas fa-indian-rupee-sign text-green-500"></i>
          <span>FREE PROGRAMS</span>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {programCards.map((card, index) => (
          <ProgramCard key={index} {...card} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
