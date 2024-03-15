import React from "react";

const Projects = () => {
  return (
    <div className="space-y-8"> {/* Adds vertical spacing between each project */}
      <div className=""> 
        <h1 className="text-6xl text-center">Projects</h1> 
        </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/thumbnail-for-EfT.jpg" alt="Project" className="w-full md:w-1/4 rounded-lg" />
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl  text-custom-EFT font-tilt">Escape From Tenochtitlan</h2>
          <p className="text-gray-700">
            'Escape from Tenochtitlan' is a thrilling choice-based adventure game set in the heart of the Aztec Empire. Players take on the role of a prisoner destined for sacrifice, who must navigate through a maze of paths, make strategic decisions, and solve puzzles based on Aztec culture to escape death. Each choice directly impacts the storyline, offering a unique blend of historical intrigue and immersive gameplay. Stealth, strategy, and ethical dilemmas enrich the experience, challenging players to not only survive but also confront moral questions on their journey to freedom. Dive into an ancient world where every decision could be your last in this captivating escape adventure.
            </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://escape-from-tenochtitlan.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live Demo</a>
            <a href="https://github.com/Kevelaz/Escape-from-Tenochtitlan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub Repo</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/thumbnail-for-football-centre.jpeg" alt="Project" className="w-full md:w-1/4 rounded-lg" />
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-arial font-extrabold">Football Centre</h2>
          <p className="text-gray-700">
            I've developed an innovative application tailored for soccer enthusiasts and professionals who desire a seamless way to explore the vast landscape of European soccer talent. My platform is meticulously designed to offer an intuitive user experience, enabling users to effortlessly search for and discover soccer players across Europe. It presents a profile for each player, encompassing their name, nationality, current team, and the distinctive team colors they wear. This tool is the culmination of my commitment to enhancing access to soccer player information, making it an indispensable resource for fans, scouts, and anyone passionate about soccer.
            </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://football-centre.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live Demo</a>
            <a href="https://github.com/Kevelaz/Football-Centre-Front-end-" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Frontend Repo</a>
            <a href="https://github.com/Kevelaz/Football-Centre-Back-end-" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Backend Repo &rarr;</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/thumbnail-for-TG.jpg" alt="Project" className="w-full md:w-1/4 rounded-lg" />
        <div className="w-full md:w-2/3">
          <h2 className="text-6xl text-gold font-italianno">Travel Gold</h2>
          <p className="text-gray-700">
          As part of a dynamic team, I played a key role in developing a travel application, designed to streamline the travel planning process. Our project was structured around a collaborative effort, dividing our expertise into specialized backend and frontend teams.

          My contributions were focused on the backend, utilizing MongoDB, Express, and Node.js to architect a system that supports user registration, destination search, and personalized point of interest discovery. This functionality enables users to effortlessly find, view, and save their desired travel spots for future adventures.

          Complementing our backend, the frontend team utilized React and Vite to deliver a seamless and engaging user interface, ensuring a cohesive and user-friendly experience. This project not only showcased our technical skills but also our commitment to improving the way travelers plan and experience their journeys.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://peaceful-pasca-8105c8.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live Demo</a>
            <a href="https://github.com/Kevelaz/travel-gold-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Frontend Repo</a>
            <a href="https://github.com/Kevelaz/travel-gold-backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Backend Repo</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/thunbnail-for-PF.jpg" alt="Project" className="w-full md:w-1/4 rounded-lg" />
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-lili">Purrfect Match</h2>
          <p className="text-gray-700">
            As part of a dynamic team of four, I played a key role in developing an innovative application designed to connect potential pet adopters with nearby animal shelters. Our application facilitates the search for adoptable pets, providing users with detailed information and the ability to save their favorite listings for future reference. My responsibility centered on the frontend development, where I utilized React and Vite to create an engaging and user-friendly interface. Meanwhile, the backend was expertly handled by my colleagues using Django, Python, and SQL, ensuring a seamless integration of data and functionality. This project not only showcased our technical proficiency but also our commitment to enhancing the pet adoption process through technology.
            </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://purrfect-match-front-end.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live Demo</a>
            <a href="https://github.com/Kevelaz/Purrfect-Match-front-end" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Frontend Repo</a>
            <a href="https://github.com/Kevelaz/Purrfect-Match-back-end" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Backend Repo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects