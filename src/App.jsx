import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = [
    "animate-spin",
    "animate-spin-slow",
    "animate-spin-slower"
  ];
  
  console.log("Force Tailwind to include classes:", classes);
  return (
    <>
    <div className="bg-gray-900 text-white font-sans">
      <header className="backdrop-blur-md bg-gray-800/80 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(0,255,255,0.4)]">
            Tassos Karageorgiadis
          </h1>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium tracking-wide">
            <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-amber-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-amber-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 bg-gray-800/95 border-t border-gray-700">
            <ul className="space-y-2 text-sm font-medium tracking-wide">
              <li><a href="#home" className="block hover:text-amber-400">Home</a></li>
              <li><a href="#about" className="block hover:text-amber-400">About</a></li>
              <li><a href="#skills" className="block hover:text-amber-400">Skills</a></li>
              <li><a href="#projects" className="block hover:text-amber-400">Projects</a></li>
              <li><a href="#contact" className="block hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
        )}
      </header>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-800 px-6 py-20">
        <div className="container mx-auto text-center flex flex-col items-center">
          
          {/* Avatar */}
          <div className="mb-8 bg-gradient-to-r from-amber-500 via-pink-500 to-indigo-500 p-1 rounded-full">
          <div className="bg-gray-800 p-1 rounded-full">
            <img
              src="../pics/VFR_8796_cropC.jpg" // Replace with your actual image path
              alt="Tassos Karageorgiadis"
              className="w-55 h-55 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-200 p-1"
            />
          </div>
          </div>

          {/* Text content */}

          <h2 className="text-4xl font-semibold text-indigo-500 animate-pulse">
            Welcome to my humble abode!
          </h2>

          {/* Spacer */}
          <div className="my-8" />

            {/* Intro Text with Simulated Gradient Top Border */}
            <div className="relative inline-block px-6 pt-6 pb-4">
              {/* Simulated Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-300 to-gray-500 rounded-sm" />

              <div className="bg-gray-800 text-white">
                <p className="text-xl text-gray-300 leading-relaxed text-center">
                  <span className="font-semibold">I'm Tassos</span>, a passionate engineer who loves to solve problems creatively.
                  <br />
                  <span className="font-mono font-bold text-white">Research Associate @ ITI, CERTH</span>
                </p>
              </div>
            </div>
            </div>
    </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-4 text-xl">I've graduate from M.Eng in Elcetrical and Computer Engineer at the Technical University of Crete and I'm holding an M.Sc in AI and Data Analytics from University of Macedonia, Greece. I specialize in building machine learning models and IT related projects.</p>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Skills</h3>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-8 px-4">
            <div>
              <h4 className="font-semibold text-xl">Machine Learning</h4>
              <p className="text-sm mt-1">Expert in Machine Learning models, data analysis, AI algorithms with Python, R.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">JavaScript</h4>
              <p className="text-sm mt-1">Skilled in React, Node.js, building RestAPIs.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Research </h4>
              <p className="text-sm mt-1">Deploying ML pipelines and AI-driven solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-cyan-500">My Projects</h3>
          <p className="mt-4 text-xl">Here are some of the projects I've worked on:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
              <a href="https://github.com/tassosblackg/RUFake"  target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-yellow-300"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">RUFake</h4>
              <p className="text-gray-300"> Are You Fake? Classify fake and real images. </p>
            </a>

            <a href="https://github.com/tassosblackg/W-I-B" target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-yellow-300">

                <h4 className="text-xl font-semibold mb-2 text-white">WIB</h4>
                <p className="text-gray-300"> Where Is the Ball? C++ and OpenCV football detector. </p>
              </a>
              <a href="https://github.com/tassosblackg/ev3c_LFOA" target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-yellow-300">

                <h4 className="text-xl font-semibold mb-2 text-white">EV3-LineFollow</h4>
                <p className="text-gray-300"> LineFollowing and Obstacle Avoidance demo for EV3 mindstorm and TecnhicMotors. </p>
              </a>
              <a href="https://github.com/tassosblackg/ev3c_LFOA" target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-yellow-300">

                <h4 className="text-xl font-semibold mb-2 text-white">EV3-LineFollow</h4>
                <p className="text-gray-300"> LineFollowing and Obstacle Avoidance demo for EV3 mindstorm and TecnhicMotors. </p>
              </a>
              
          </div>
          <div className="mt-16">
          <h4 className="text-3xl font-bold mb-8 text-center"> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              EU Funded Projects
           </span>{' '}
          <span className="inline">🇪🇺</span>
          </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://so-close.eu/" target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-sky-500">
              <h4 className="text-xl font-semibold mb-2 text-sky-300 tracking-wide">SOClose</h4>
                <p className="text-gray-300"> Development of a social media crawler and RestAPI for cultural hetitage context. </p>
              </a>
              <a href="https://testudo-project.eu/" target="_blank" rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-sky-500">
              <h4 className="text-xl font-semibold mb-2 text-sky-300 tracking-wide">TESTUDO</h4>
                <p className="text-gray-300"> Development of Prediction Analytics models for Critical Infrastructure Protection. </p>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
 {/* Contact Section */}
<section id="contact" className="bg-gray-800 py-20">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-bold text-white mb-4">Contact Me</h3>
    <p className="text-xl text-gray-300 mb-8">Feel free to reach out!</p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
      
      {/* Hidden Email */}
      <span className="text-white">
        📧{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:" + ["tassoskarag", "iti.gr"].join("@");
          }}
          className="hover:text-amber-400 underline"
        >
          Send Email
        </a>
      </span>

      {/* GitHub */}
      <a
        href="https://github.com/tassosblackg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
      >
        🐱 GitHub
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tasoskarageorgiadis/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
      >
        💼 LinkedIn
      </a>

      {/* ORCID */}
      <a
        href="https://orcid.org/0009-0006-0878-5131"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
      >
        🧬 ORCID
      </a>
    </div>
  </div>
</section>

      {/* Footer Class */}
      <footer className="bg-gray-900 text-white py-6 mt-20">
        <div className="container mx-auto text-center px-2">
          <p className="text-lg font-medium font-mono tracking-wide">
            Think by <span className="text-red-500">❤️</span>, Build by <span className="text-yellow-400">✋</span>.  
            <br />
            <span className="text-sm text-gray-400 mt-2 inline-block">Developed by <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">tassosblackg </span> 🚀</span>
          </p>
        </div>
      </footer>
    
    </div>
      
      {/* <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Tailwind + PostCSS Test</h1>
   

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110">
        Hover Me
      </button>

    </div>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold ">Tailwind is Working! 🚀</h1>
    </div> */}
  
    </>
  )
}

export default App
