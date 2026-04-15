const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-[#0a192f] text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
        
        <p className="text-gray-400 mb-10 leading-relaxed">
          I’m currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        {/* Mail Button */}
        <a 
          href="mailto:salmanibnriyaj@gmail.com?subject=Hello%20from%20Portfolio" // Tomar email ekhane bosao
          className="inline-block px-10 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0a192f] transition-all rounded font-mono text-lg"
        >
          Email Me
        </a>

      </div>
    </section>
  );
};

export default Contact;