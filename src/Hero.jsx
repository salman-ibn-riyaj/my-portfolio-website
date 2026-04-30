import Image from "next/image";
import Link from "next/link";


const Hero = () => {

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-blue-400 font-mono mb-2">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Salman Shah</h1>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
            I build full-stack web applications.
          </h3>
          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            I'm a MERN Stack Developer specializing in building exceptional
            digital experiences. Currently, I'm focused on mastering Next.js and
            creating scalable web solutions on Ubuntu.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0a192f] transition-all rounded"
            >
              Check out my work!
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden w-full h-full border border-gray-700">
              {/* Replace '/profile.png' with your actual image path */}
              <Image
                src="/profile.png"
                alt="Salman Shah"
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
