"use client";
import { useEffect } from "react";

export default function TitleUpdater() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          
          // টাইটেল আপডেট করা
          const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
          document.title = `Salman Shah | ${sectionName}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}