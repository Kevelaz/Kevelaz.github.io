import React from "react";
import './Home.css'

const Home = () => {
  return (
    <div className="m-9">
        <h1 className="text-9xl">Welcome</h1>
        <h2 className="text-7xl">My name is Kevin Velazquez</h2>
            <div id="links-for-websites" className="flex mt-3">
                <a href="https://github.com/Kevelaz" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/img/github-mark.png" alt="github badge" style={{width: '50px', height: '50px'}} />
                </a>
                <a href="https://www.linkedin.com/in/kevin-medina-velazquez/" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/img/linkedin_logo_icon_187625.png" alt="github badge" style={{width: '51px', height: '51px'}} />
                </a>
            </div>
    </div>
  )
}

export default Home