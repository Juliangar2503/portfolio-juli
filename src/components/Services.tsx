import { Laptop, PencilRuler } from 'lucide-react';

const services = [
    {
        icon: <Laptop className="text-cyan-400 w-6 h-6" />,
        title: 'Website Development',
        description:
            "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.",
    },
    {
        icon: <PencilRuler className="text-pink-400 w-6 h-6" />,
        title: 'Web Design',
        description:
            "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
    },
    {
        icon: <PencilRuler className="text-indigo-400 w-6 h-6" />,
        title: 'WordPress Development',
        description:
            'I build websites on WordPress, making them easy to update and manage.',
    },
];

export default function Services() {
    return (
        <section id="servicios" className="mt-32">
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
                    MY SERVICES
                </span>
            </h2>

            <div className="flex flex-col gap-12 relative">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="group relative border border-white/10 rounded-xl bg-white/5 backdrop-blur p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1">{service.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <p className="text-sm text-white/80 mt-1">{service.description}</p>
                            </div>
                        </div>

                        {/* Línea vertical (opcional) */}
                        {idx < services.length - 1 && (
                            <div className="absolute left-6 top-full h-12 border-l border-white/10" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
