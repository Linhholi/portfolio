import "./home.css";
import { About } from "./about";
import { Project } from "./project";
import { SkillsSection } from "./skill";
import { TechSkills } from "./tech";
import { Work } from "./work";
import { Edu } from "./edu";
import { Certificate } from "./cert";
import { Contact } from "./contact";

const Home = () => {
  return (
    <div>
        <div className="navigation">
          <a href="/" className="text-wrapper">Linh Nguyen</a>
          <div className="menu-items">
              <a href="/" className="div">About</a>
              <a href="#skills" className="div">Skills</a>
              <a href="#work" className="div">Work</a>
              <a href="#edu" className="div">Education</a>
              <a href="#cert" className="div">Certificate</a>
              <a href="#contact" className="div">Contact</a>
          </div>
        </div>
        <About id="about"/>
        <Project id="projects" className="projects" />
        <SkillsSection
          id="skills"
          version="two"
        />;
        <TechSkills className="tech-skills-instance" />
        <Work id="work" className="work" />
        <Edu id="edu" className="edu" />
        <Certificate id="cert" className="cert" />
        <Contact id="contact" className="contact" />
    </div>  
  );
};
export default Home;