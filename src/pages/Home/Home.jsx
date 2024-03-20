import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === 'Enter') {
        navigate('/about-me')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navigate])

  const goToAboutMePage = () => {
    navigate('/about-me')
  }
  return (
    <div className="m-9 pt-28">
          <div className="flex items-center">
            <div>
                <h1 className="text-9xl">Welcome</h1>
                <h2 className="text-6xl">My name is Kevin Velazquez</h2>
            </div>
                <img src="src/assets/img/IMG_6401 (1).jpeg" alt="Kevin Velazquez" className="rounded-full w-96 h-96 object-cover object-center ml-36" />
          </div>
            <div id="links-for-websites" className="flex w-full max-w-2xl">
                <a href="https://github.com/Kevelaz" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/img/github-mark.png" alt="github badge" style={{width: '50px', height: '50px'}} />
                </a>
                <a href="https://www.linkedin.com/in/kevin-medina-velazquez/" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/img/linkedin_logo_icon_187625.png" alt="github badge" style={{width: '51px', height: '51px'}} />
                </a>
                <button onClick={goToAboutMePage} className="ml-auto bg-blue-500 text-white rounded">
              Go to About Me
              </button>
            </div>
    </div>
  )
}

export default Home