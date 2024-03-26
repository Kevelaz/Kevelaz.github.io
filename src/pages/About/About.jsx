import React from "react";

const About = () => {
  return (
    <>
      <div className="relative z-10 text-2xl text-white text-center mr-20 ml-20">
          <h1 className="pb-8" id="intro-para-1">
              My name is Kevin Medina Velazquez, and I am a burgeoning software developer with roots deeply embedded in a first-generation Mexican-American heritage. This background has imbued me with a profound appreciation for the principles that hard work fosters superior outcomes and the importance of extending equal respect to all individuals.
          </h1>
          <h1 id="intro-para-2">
              As a junior developer, I am on a continual journey of learning and personal growth, engaging with each project with a fresh perspective and an eager mind. My tenure in the technology domain began with a significant milestone—developing a website for Baja Mobile Mechanic. This project not only marked my initial foray into the tech industry but also served as a practical application of the skills I honed during an intensive 3-month software engineering program at General Assembly. Each step of this journey has been a testament to my commitment to excellence and an enduring quest for knowledge.
          </h1>
      {/* <img src="src/assets/img/IMG_3384 2.jpg" alt="Kevin Velazquez" className="rounded-full     w-96 h-96 object-cover object-center ml-36 scale-100" /> */} 
        </div>
        <div className="relative z-10 text-slate-100 text-2xl ml-32">
            <h1> Don Jon Marine Co.</h1>
            <img src="src/assets/img/don-jon-logo-removebg-preview.png" alt="don jon" className="md:w-1/6 "/>
              <li> 2018-2023 </li>
              <li> Recycling Industry </li>
              <li> Machine Operator </li>
        </div>
    </>
  )
}

export default About