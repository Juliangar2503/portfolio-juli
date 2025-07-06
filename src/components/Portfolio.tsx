import { FaGooglePlay } from 'react-icons/fa';


export default function Portfolio() {
    const projects = [
        {
            title: 'Chat App',
            description: 'Aplicación de chat en tiempo real con WebSockets, Node.js y Sequelize.',
            imageUrl: './src/assets/proyect1.png', // ✅ Cambia esto por tu ruta real
            demoUrl: 'https://demo-chat-app.com',
            codeUrl: 'https://github.com/tuusuario/chat-app',
            hasGooglePlay: true,
        },
        {
            title: 'Panel de Emergencias',
            description: 'Visualización de emergencias activas con timeline y gestión de capas.',
            imageUrl: './src/assets/proyect2.png', // ✅ Cambia esto también
            demoUrl: 'https://emergencias-panel.com',
            codeUrl: 'https://github.com/tuusuario/emergencias-panel',
            hasGooglePlay: false,
        },
    ];


    return (

        <section id="servicios">

            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
                    MY PORTFOLIO
                </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white/5 backdrop-blur rounded-xl p-4 shadow-md hover:scale-[1.02] transition-transform"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="rounded-md w-full h-48 object-cover mb-4"
                        />

                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            {project.hasGooglePlay && (
                                <FaGooglePlay className="text-green-400 w-5 h-5" title="Disponible en Google Play" />
                            )}
                        </div>

                        <p className="text-sm text-white/80 mt-2 mb-4">{project.description}</p>

                        <div className="mt-auto flex gap-4">
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md transition-colors"
                            >
                                Demo
                            </a>
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition-colors"
                            >
                                Código
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}