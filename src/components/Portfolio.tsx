import { FaGooglePlay } from 'react-icons/fa';


export default function Portfolio() {
    const projects = [
        {
            title: 'TUSSAM PADEL',
            description:
                'Aplicación actualmente en uso, creada para facilitar al administrador la gestión de clasificaciones y resultados de partidos. Antes, este proceso le quitaba mucho tiempo y los jugadores no podían consultar los resultados en tiempo real.',
            imageUrl: './src/assets/proyect1.png',
            demoUrl: 'https://tussam-padel-dinamic.web.app/auth',
            manualUrl: './src/assets/manuales/PadelTussamApp.pdf',
            hasGooglePlay: true,
            googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.tussam.padel',
        },
        {
            title: 'Casillas Padel Admin',
            description:
                'Este proyecto me hace especial ilusión. Se trata de una aplicación para la gestión de pistas de pádel en el club donde suelo jugar. Anteriormente, el propietario del club organizaba todo manualmente mediante notas y calendario, lo que ahora se ha digitalizado y optimizado con esta solución. Credenciales de prueba: garqui325@gmail.com - 123456',
            imageUrl: './src/assets/proyect2.png',
            demoUrl: 'https://casillas-padel-admin.web.app/auth',
            manualUrl: './src/assets/manuales/CasillasPadelApp.pdf',
            hasGooglePlay: false,
        },
    ];


    return (

        <section id="portfolio">

            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
                    PORTFOLIO
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
                            {project.hasGooglePlay && project.googlePlayUrl && (
                                <a
                                    href={project.googlePlayUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Disponible en Google Play"
                                >
                                    <FaGooglePlay className="text-green-400 w-5 h-5 hover:scale-110 transition-transform" />
                                </a>
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
                                href={project.manualUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition-colors"
                            >
                                Manual
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}