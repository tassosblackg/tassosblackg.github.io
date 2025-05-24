import { useState, useEffect } from "react";
import {
  SiPython,
  SiTensorflow,
  SiGit,
  SiOpencv,
  SiDocker,
  SiKeras,
  SiJavascript,
  SiR,
  SiMongodb,
  SiCplusplus,
  SiLinux,
  SiApple,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-blue-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-300" /> },
  { name: "Keras", icon: <SiKeras className="text-pink-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "R", icon: <SiR className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
//   { name: "MS Office", icon: <SiMicrosoftoffice className="text-green-500" /> },
  // OS skills last
  { name: "Linux", icon: <SiLinux className="text-gray-400" /> },
  { name: "macOS", icon: <SiApple className="text-gray-300" /> },
];

export default function SkillsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="transition-all duration-500 ease-in-out transform scale-110 flex flex-col items-center">
        <div className="text-7xl mb-2 animate-bounce">{skills[index].icon}</div>
        <div className="text-2xl font-semibold text-gray-100">{skills[index].name}</div>
      </div>
    </div>
  );
}
