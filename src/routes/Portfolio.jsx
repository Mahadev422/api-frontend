import About from "../components/portfolio/About";
import Skill from "../components/portfolio/Skill";
import Project from "../components/portfolio/Project";

const Portfolio = () => {



  return (
    <div className="min-h-screen font-sans">
      <main className="pb-10">
        {/* About Section */}
        <About />
        <hr />
        {/* Skills Section */}
        <Skill />
        <hr />

        {/* Projects Section */}
        <Project />
      </main>
    </div>
  );
};

export default Portfolio;
