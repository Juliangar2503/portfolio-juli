import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function ContactSection() {
    const gmail = 'jgq325@gmail.com';

    return (
        <section
            id="contacto"
            className="mt-20 bg-white/5 backdrop-blur rounded-xl p-8 shadow-md text-white"
        >
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT: Texto y redes */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
                            QUIERES HABLAR?
                        </span>
                    </h2>


                    <div className="mb-4">
                        <p className="text-lg mb-6">CONTACTO 💬</p>
                        <a
                            href={`mailto:${gmail}`}
                            className="text-blue-400 hover:underline"
                        >
                            {gmail}
                        </a>
                    </div>

                    <div>
                        <p className="font-semibold mb-1 text-white/80">SOCIAL MEDIA</p>
                        <div className="flex gap-4 text-xl">
                            <a href="https://www.linkedin.com/in/julian-garrido-quintero" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
                            </a>
                            <a href="https://wa.me/722740183" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
                            </a>
                            <a href="https://github.com/Juliangar2503" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-gray-400 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Formulario */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/10 p-2 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/10 border border-white/10 p-2 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            className="w-full bg-white/10 border border-white/10 p-2 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </section>
    );
}