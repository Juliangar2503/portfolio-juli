import { SiHtml5, SiCss3, SiTypescript, SiIonic, SiAngular, SiDocker } from 'react-icons/si';
import { FaGitAlt, FaVuejs } from 'react-icons/fa'; // Alternativa a GitBranch (más representativo del uso de Git)

export default function Technologies() {
  const techs = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500 w-6 h-6" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 w-6 h-6" /> },
    { name: 'Angular', icon: <SiAngular className="text-red-600 w-6 h-6" /> },
    { name: 'Ionic', icon: <SiIonic className="text-indigo-500 w-6 h-6" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-400 w-6 h-6" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500 w-6 h-6" /> },
  ];

  return (
    <section id="tecnologia" className="py-24  text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
            TECNOLOGÍA
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/5 backdrop-blur rounded-xl p-4 shadow-md hover:scale-105 transition-transform"
            >
              {tech.icon}
              <p className="mt-2 text-sm font-medium text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}