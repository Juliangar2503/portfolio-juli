import accentureLogo from './src/assets/logos/accentureLogo.png';

const experiencia = [
        {
            empresa: "Accenture",
            logo: accentureLogo,
            rol: "Salesforce Developer",
            duracion: "4 meses",
            descripcion:
                "Trabajé como desarrollador Salesforce, aprendiendo a trabajar en equipo, resolver errores en una plataforma de gran escala y comunicarme con los clientes para entender sus necesidades.",
        },
        {
            empresa: "Tussam padel",
            logo: "./public/logos/tussamLogo.jpeg",
            rol: "Desarrollador Full Stack",
            duracion: "3 meses",
            descripcion:
                "Desarrollé una app personalizada para la gestión de una liga de pádel. Esta experiencia me ayudó a desenvolverme de forma autónoma y a mejorar la comunicación con el cliente.",
        },
        {
            empresa: "Vexiza",
            logo: "./public/logos/vexizaLogo.jpeg",
            rol: "Desarrollador Full Stack",
            duracion: "Actualmente",
            descripcion:
                "Trabajo con Vue.js en el frontend y Express.js en el backend. También utilizo Docker y Android Studio con Kotlin. Estoy en constante aprendizaje y mejora de mis habilidades full stack.",
        },
    ];

export default function Experience() {
    return (
        <section id="experiencia" className="mt-32">
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
                    MI EXPERIENCIA
                </span>
            </h2>

            <div className="flex flex-col gap-12 relative">
                {experiencia.map((exp, idx) => (
                    <div
                        key={idx}
                        className="group relative border border-white/10 rounded-xl bg-white/5 backdrop-blur p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                        <img
                            src={exp.logo}
                            alt={exp.empresa}
                            className="w-10 h-10 object-contain rounded-md mt-1"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{exp.rol}</h3>
                            <p className="text-sm text-white/70">
                                <strong>{exp.empresa}</strong> — {exp.duracion}
                            </p>
                            <p className="text-sm text-white/80 mt-1">{exp.descripcion}</p>
                        </div>
                    </div>

                        {/* Línea vertical (opcional) */}
                        {idx < experiencia.length - 1 && (
                            <div className="absolute left-6 top-full h-12 border-l border-white/10" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
