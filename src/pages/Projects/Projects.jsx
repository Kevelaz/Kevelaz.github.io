import React from "react";

const Projects = () => {
  return (
    <div className="space-y-8"> {/* Adds vertical spacing between each project */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <img src="src/assets/img/thumbnail-for-EfT.jpg" alt="Project" className="w-full md:w-1/4 rounded-lg" />
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl  text-custom-EFT font-tilt">Escape From Tenochtitlan</h2>
          <p className="text-gray-700">Description here</p>
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
          <p className="text-gray-700">Description here</p>
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
          <h2 className="text-6xl font-italianno">Travel Gold</h2>
          <p className="text-gray-700">Description here</p>
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
          <p className="text-gray-700">Description here</p>
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