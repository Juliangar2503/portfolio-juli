export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="md:w-1/2 text-center md:text-left p-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                        SOFTWARE
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        DEVELOPER
                    </span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-300">
                    Soy Juli, un desarrollador de software apasionado por crear soluciones digitales que mejoren la vida de las personas.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="./src/assets/me.png"
                    alt="Julián Garrido"
                    className="w-72 sm:w-80 md:w-96 rounded-2xl border-4 border-white/10 shadow-xl"
                />
            </div>
        </section>
    );
}