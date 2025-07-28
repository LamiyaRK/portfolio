import React, { useRef, useState, useEffect } from "react";
import { ScrollContext } from "./ScrollContext";

const ScrollProvider = ({ children }) => {
  const About = useRef(null);
  const Contact = useRef(null);
  const Skills = useRef(null);
  const Education = useRef(null);
  const Projects = useRef(null);
  const Home = useRef(null);

  const [selected, setSelected] = useState("Home");
  const [explore, setExplore] = useState(null);

  const scrollTo = (ref, name) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setSelected(name);
    }
  };

 
  useEffect(() => {
     window.scrollTo({ top: 0, behavior: "auto" });
    if (Home.current) {
      Home.current.scrollIntoView({ behavior: "auto" });
      setSelected("Home");
    }
  }, []);

  useEffect(() => {
    
    const sections = [
      { ref: Home, name: "Home" },
      { ref: About, name: "About" },
      { ref: Skills, name: "Skills" },
      { ref: Education, name: "Education" },
      { ref: Projects, name: "Projects" },
      { ref: Contact, name: "Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setSelected(section.name);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        About,
        Contact,
        Skills,
        scrollTo,
        Education,
        Projects,
        Home,
        selected,
        explore,
        setExplore,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
