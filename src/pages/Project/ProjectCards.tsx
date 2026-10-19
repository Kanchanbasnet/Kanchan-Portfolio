import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import multimodal from '../../assets/images/MultiModal.png';

const ProjectCards = () => {
  const project = {
    id: 1,
    title: 'Multi Modal Application',
    description:
      'A multi-modal AI chat application where users can interact with OpenAI using text, images, documents, and voice — all in real time. Built as a scalable monorepo backend with Node.js, PostgreSQL, and Google OAuth, designed to handle concurrent conversations reliably.',
    image: multimodal,
    githubLink: 'https://github.com/Kanchanbasnet/multi-modal',
    liveLink: 'https://repoapi-production-6ea4.up.railway.app',
    techStack: [
      'NodeJS',
      'React',
      'TurboRepo',
      'PostgreSQL',
      'Supabase',
      'Redis',
      'OpenAI',
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl sm:max-w-2xl mx-auto"
    >
      <Card className="overflow-hidden border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-900/60 backdrop-blur-md shadow-2xl rounded-2xl transition-all duration-300 flex flex-col p-0">
        <div className="relative h-[200px] sm:h-[240px] overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 sm:p-7 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-zinc-900 dark:text-white tracking-tight transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-5 transition-colors">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-zinc-100 dark:bg-zinc-800/80 text-xs sm:text-sm font-medium py-1 px-3 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 py-2.5 px-5 rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 py-2.5 px-4 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCards;


