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
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 p-6 rounded-lg shadow-md">
              <img src="src/assets/img/general-assembly-logo-D5C634F07A-seeklogo.com.png" alt="GA" className=" ml-24 md:w-1/6"/>
            <div className="w-full md:w-2/3">
                <h2 className="text-6xl text-white font-barlow font-semibold pb-8">General Assembly</h2>
                <p className="text-white">
                    helllloopopppppppppppppp
                </p>
                <div className="flex">
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" />
                </div>
              </div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0   md:space-x-4 p-6 rounded-lg shadow-md">
              <img src="src/assets/img/logo1-for-ivan_copy-removebg-preview.png" alt="BMM" className=" ml-24 md:w-1/6"/>
            <div className="w-full md:w-2/3">
                <h2 className="text-6xl text-white font-anta pb-8">Baja Mobile Mechanic</h2>
                <p className="text-white">
                    helllloopopppppppppppppp
                </p>
                <div className="flex">
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" />
                </div>
              </div>
          </div>
    </>
  )
}
export default About