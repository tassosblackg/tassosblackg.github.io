import { useState } from 'react';
import SkillsCarousel from "./SkillsCarousel";
import { 
  HiOutlineMail, 
  HiOutlineLocationMarker 
} from "react-icons/hi";
import { 
  FaGithub, 
  FaLinkedin, 
  FaOrcid 
} from "react-icons/fa";
import { FaHeart, FaHandPaper } from "react-icons/fa";
// import avatar from '/pics/avatar.jpg';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emailRevealed, setEmailRevealed] = useState(false);
  return (
    <>
      {/* Top Navigation */}
      <div className="bg-gray-900 text-white font-sans">
        <header className="backdrop-blur-md bg-gray-800/80 text-white sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4 py-3">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(128,0,255,0.6)]">
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
            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <ul className="md:hidden px-4 pb-4 space-y-2 bg-gray-800/95 border-t border-gray-700">
              <li><a href="#home" className="block hover:text-amber-400">Home</a></li>
              <li><a href="#about" className="block hover:text-amber-400">About</a></li>
              <li><a href="#skills" className="block hover:text-amber-400">Skills</a></li>
              <li><a href="#projects" className="block hover:text-amber-400">Projects</a></li>
              <li><a href="#contact" className="block hover:text-amber-400">Contact</a></li>
            </ul>
          )}
        </header>

        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center">
          {/* Avatar with gradient border */}
          <div className="relative mb-8">
            <div className="w-80 h-80 rounded-full p-[3px] bg-gradient-to-tr from-amber to-cyan-400">
              <img src="/mavatar.jpg" alt="Tassos Avatar" className="rounded-full w-full h-full object-cover border-4 border-gray-800" />
            </div>
          </div>

          <h2 className="text-4xl mt-6 font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text animate-pulse">Welcome to my humble abode!</h2>
          {/* Gradient horizontal line */}
          <div className="w-full max-w-3xl h-1 rounded-full mt-10   bg-gradient-to-r from-gray-400 via-pink-400 to-gray-500" />
         {/* Text with gradient top border (no box bg) */}
          <div className="w-full max-w-xl  mt-3 pt-4">
            <p className="text-xl text-gray-300 leading-relaxed whitespace-nowrap">
              <span className="font-semibold">I'm Tassos</span>, a passionate engineer who loves solving problems creatively.
              <br />
              <span className="font-mono font-bold text-white">Research Associate <span className="text-cyan-300">@ ITI, CERTH</span></span>
            </p>
          </div>
        </section>
{/* About Section */}
<section id="about" className="min-h-screen bg-gray-900 py-20 flex flex-col items-center">
  <div className="container mx-auto px-4 max-w-4xl text-center">
    {/* Section Title */}
    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
      About Me
    </h3>

    {/* Intro Text */}
    <p className="text-xl text-gray-300 mb-6 leading-relaxed text-justify">
      Electrical and Computer Engineer with a strong foundation in hardware and software systems, holding a Master of Engineering in ECE and an MSc in AI and Data Analytics. Experienced Research Associate focusing on machine learning, networks, API integration, and web scraping/crawling technologies. Driven by a passion for innovation, I thrive on solving challenging problems and creating impactful solutions.
    </p>

    {/* Nickname / Tagline */}
    <p className="italic text-gray-400 mb-12 tracking-wide">A Jack of all trades in tech and innovation</p>

    {/* Timeline Container */}
    <div className="relative w-full max-w-3xl mx-auto">
      {/* SVG Curvy Vertical Line */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
        width="6"
        height="100%"
        viewBox="0 0 6 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9ca3af" />  {/* gray-400 */}
            <stop offset="50%" stopColor="#22d3ee" /> {/* cyan-400 */}
            <stop offset="100%" stopColor="#f97316" /> {/* orange-500 */}
          </linearGradient>
        </defs>
        <path
          d="M3 0
             C 3 100, 6 200, 3 300
             C 0 400, 6 500, 3 600
             C 0 700, 6 800, 3 900
             L3 1000"
          stroke="url(#gradientLine)"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      {/* Timeline items */}
      <div className="flex flex-col space-y-20 relative z-10">
        {[
          {
            year: "2013",
            events: ["Entered Electrical and Computer Engineering School"],
          },
          {
            year: "2017",
            events: ['Robotics Intern "Kouretes" Team @ TUC, Crete'],
          },
          {
            year: "2018",
            events: ["Started Network Engineer Intern @ NOC, TUC"],
          },
          {
            year: "2020",
            events: ["Graduated from ECE School",
              "Started MSc in AI and Data Analytics @ UOM",
            ],
          },
          {
            year: "2021 - 2023",
            events: ["Research Associate Software Engineer @ ITI, CERTH"],
          },
          {
            year: "2023-2024",
            events: [
              "System Administrator / IT @ Hellenic Armed Forces",
              "Completed MSc in AI and Data Analytics @ UOM",
            ],
          },
          {
            year: "2024 - Present",
            events: ["Research Associate Machine Learning Engineer  @ ITI, CERTH"],
          },
        ].map(({ year, events }, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Connector line from curve to circle */}
              <div
                className={`absolute top-8 ${
                  isLeft ? "left-1/2 -translate-x-1/2" : "right-1/2 translate-x-1/2"
                } h-0.5 w-10 bg-gradient-to-r from-transparent via-cyan-400 to-orange-500`}
                style={{ top: "32px" }}
              />

              {/* Timeline node */}
              <div
                className={`flex flex-col items-center bg-gray-800 rounded-lg p-4 max-w-xs shadow-lg border border-gray-700`}
                style={{ minWidth: "220px" }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-md mb-3">
                  {year}
                </div>
                <div className="text-gray-300 text-sm space-y-1 text-left">
                  {events.map((event, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-1 h-1 mt-2 mr-2 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400"></span>
                      <span>{event}</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>



        <section id="skills" className="min-h-screen bg-gray-800 pb-20 flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 mb-5">
          Skills:
        </h3>
        <p className="text-xl text-gray-300 mb-8">Here are some technologies I use:</p>
        {/* Laptop Mockup */}
        <div className="flex flex-col items-center">
          {/* Laptop Body */}
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl w-[350px] h-[220px] md:w-[480px] md:h-[300px] overflow-hidden border-4 border-gray-700">
            {/* Laptop Screen */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
              <SkillsCarousel />
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[400px] md:w-[520px] h-6 bg-gray-700 rounded-b-3xl mt-[-12px] shadow-lg"></div>
        </div>
      </div>
    </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-gray-900 py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-grey-500 to-cyan-500">
              My Projects
            </h3>
            <p className="mt-4 text-xl">Here are some of the projects I've worked on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
              {[
                {
                  title: 'RUFake',
                  desc: 'Are You Fake? Classify fake and real images.',
                  link: 'https://github.com/tassosblackg/RUFake'
                },
                {
                  title: 'WIB',
                  desc: 'Where Is the Ball? C++ and OpenCV football detector.',
                  link: 'https://github.com/tassosblackg/W-I-B'
                },
                {
                  title: 'EV3-LineFollow',
                  desc: 'LineFollowing and Obstacle Avoidance demo for EV3 mindstorm and TecnhicMotors.',
                  link: 'https://github.com/tassosblackg/ev3c_LFOA'
                },
              ].map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-green-400"
                >
                  <h4 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-grey-500 to-cyan-500">{proj.title}</h4>
                  <p className="text-gray-300">{proj.desc}</p>
                </a>
              ))}
            </div>

            {/* EU Funded Projects */}
            <div className="mt-16">
              <h4 className="text-2xl font-semibold text-sky-400 mb-6">🇪🇺 EU Funded Projects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
              {[
                {
                  title: 'SoClose',
                  desc: 'Development of a social media crawler and REST API for cultural heritage context.',
                  link: 'https://so-close.eu/'
                },
                {
                  title: 'TESTUDO',
                  desc: 'Prediction Analytics models for Critical Infrastructure Protection.',
                  link: 'https://testudo-project.eu/'
                },
                {
                  title: 'SINCERE',
                  desc: 'Digital Twins: Resilient and adaptive renovation towards net-zero carbon heritage buildings.',
                  link: 'https://sincere-project.eu/'
                },
              ].map((projeu, i) => (
                <a
                  key={i}
                  href={projeu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 p-6 transition-all duration-300 border border-cyan-400"
                >
                  <h4 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-grey-500 to-cyan-500">{projeu.title}</h4>
                  <p className="text-gray-300">{projeu.desc}</p>
                </a>
              ))}
            </div>
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
         <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
          Contact Me
        </h3>
        <p className="text-xl text-gray-300 mb-10">Feel free to reach out!</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-white">

          {/* Email */}
          <button
            onClick={() => setEmailRevealed(!emailRevealed)}
            className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-amber-400 transition-colors duration-300"
            aria-label="Reveal email address"
          >
            <HiOutlineMail className="text-3xl" />
            <span className="text-lg font-medium underline">
              {emailRevealed ? "tassoskarag@iti.gr" : "Click to reveal email"}
            </span>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/tassosblackg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300"
          >
            <FaGithub className="text-3xl" />
            <span className="text-lg font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tasoskarageorgiadis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          {/* ORCID */}
          <a
            href="https://orcid.org/0009-0006-0878-5131"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-amber-400 transition-colors duration-300"
          >
            <FaOrcid className="text-3xl" />
            <span className="text-lg font-medium">ORCID</span>
          </a>
        </div>
      </div>
    </section>
    
   
      <footer className="bg-gray-600 py-8 mt-20 text-center text-gray-200 select-none">
      <p className="text-sm md:text-base max-w-xl mx-auto px-4">
        Think with <FaHeart className="inline text-pink-500 mx-1" aria-label="heart" /> &nbsp;&nbsp;  
        Work by <FaHandPaper className="inline text-amber-400 mx-1" aria-label="hand" />  <br />
        Created by <span className="font-semibold text-amber-400">tblackg</span> with a little help from my friends —  
        aka a caffeine-fueled AI sidekick and a squad of brilliant humans who keep me sane. 🤖☕
      </p>
      <p className="mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Tassos Karageorgiadis. All rights reserved.
      </p>
    </footer>
     </div>
    </>
  );
}

export default App;
