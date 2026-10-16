import HeaderNavigation from '../../components/FooterNavigation';
import ProjectCards from './ProjectCards';
import Seo from '../../components/Seo';
import Footer from '../../components/Footer';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white flex flex-col relative overflow-hidden font-['Outfit'] transition-colors duration-300">
      <Seo
        title="Kanchan Basnet - Projects"
        description="A showcase of projects built by Kanchan Basnet."
        pathName="projects"
      />

      <HeaderNavigation />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pb-28">
        <ProjectCards />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
