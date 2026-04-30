import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaMastodon } from 'react-icons/fa';
import { FaBluesky, FaSquareThreads, FaThreads, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <p className="text-gray-500 font-mono text-sm">
          © {new Date().getFullYear()} Salman Shah. All rights reserved.
        </p>

        {/* Center: Built with info */}
        <p className="text-gray-600 font-mono text-xs">
          Built with Next.js & Tailwind
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/salman-ibn-riyaj" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/salman-ibn-riyaj/" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/salman_shah_rz/?hl=en" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaInstagram size={20}/>

          </a>
          <a href="https://www.threads.com/@salman_shah_rz?hl=en" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaSquareThreads size={20}/>

          </a>
          <a href="https://www.facebook.com/salmanshahibneriyaj" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaFacebook size={20}/>

          </a>
          <a href="https://x.com/salmanshahrz" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaXTwitter size={20}/>

          </a>
          <a href="https://mastodon.social/@salmanshahrz" className="hover:text-blue-400 transition-colors">
            <FaMastodon size={20}/>

          </a>
          <a href="https://bsky.app/profile/salmanshahrz.bsky.social" className="hover:text-blue-400 transition-colors">
            <FaBluesky size={20}/>

          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;