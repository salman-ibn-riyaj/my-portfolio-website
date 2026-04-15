import Contact from "@/Contact";
import Footer from "@/Footer";
import Hero from "@/Hero";
import Projects from "@/Projects";
import Skills from "@/Skills";
import Image from "next/image";


export const metadata = {
  title: "Salman Shah | Portfolio",
  description: "MERN Stack Developer Portfolio of Salman Shah, a MERN Stack Developer from Bangladesh.",
};
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero></Hero>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        
        
      </main>
    </div>
  );
}
