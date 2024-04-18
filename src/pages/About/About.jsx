import React from "react";

const About = () => {
  return (
    <>
      <div className="relative z-10 text-xl flex text-white text-left mr-80 ml-80">
        <h1 className="pb-8 " id="intro-para-1">
          My name is Kevin Medina Velazquez, and I am a burgeoning software developer with roots deeply embedded in a first-generation Mexican-American heritage. This background has imbued me with a profound appreciation for the principles that hard work fosters superior outcomes and the importance of extending equal respect to all individuals.
        </h1>
        <h1 id="intro-para-2">
          As a junior developer, I am on a continual journey of learning and personal growth, engaging with each project with a fresh perspective and an eager mind. My tenure in the technology domain began with a significant milestone—developing a website for Baja Mobile Mechanic. This project not only marked my initial foray into the tech industry but also served as a practical application of the skills I honed during an intensive 3-month software engineering program at General Assembly. Each step of this journey has been a testament to my commitment to excellence and an enduring quest for knowledge.
        </h1>
        <img src="src/assets/img/IMG_3384 2.jpg" className="rounded-full w-96 h-96 object-cover ml-36 justify-end" />
      </div>
      <h1 className="relative z-10 text-4xl text-white text-center font-bold">Tech Experience</h1>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/general-assembly-logo-D5C634F07A-seeklogo.com.png" alt="GA" className="ml-24 md:w-1/12"/>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl text-white font-barlow font-semibold pb-8">General Assembly</h2>
          <p className="text-white">
            Completed a three-month software engineering program emphasizing practical skills and industry-relevant technologies. Developed proficiency in JavaScript, Node.js, Express.js, Django, React, SQL, and Python through hands-on projects. Gained foundational knowledge in software development methodologies, problem-solving, and teamwork.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/logo1-for-ivan_copy-removebg-preview.png" alt="BMM" className="ml-24 md:w-1/12"/>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl text-white font-anta pb-8">Baja Mobile Mechanic</h2>
          <p className="text-white">
            Developed a customer-facing website for Baja Mobile Mechanic to enhance online presence and streamline service requests, including an intuitive form for service requests and an 'About' page highlighting company services, history, and values. Utilized a React + Vite frontend with a MEN stack backend for efficient and scalable development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
