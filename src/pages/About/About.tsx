import { FileDown, FileText, Code } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  ReactIcon,
  TypeScriptIcon,
} from '../../assets/icons/icons';
import resume from '../../assets/kanchanbasnet.pdf'
const skills = [
  {
    name: 'Javascript',
    icon: JavaScriptIcon,
  },
  {
    name: 'Node.js',
    icon: NodeJSIcon,
  },
  {
    name: 'TypeScript',
    icon: TypeScriptIcon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'MongoDB',
    icon: MongoDBIcon,
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQLIcon,
  },
  {
    name: 'Git',
    icon: GitIcon,
  },
  {
    name: 'Express',
    icon: ExpressIcon,
  },
  {
    name: 'Docker',
    icon: DockerIcon,
  },
];

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };
  const profile = `Backend Engineering is about more than just data—it’s about stability. With 2.3 years of experience in the Node.js stack, I specialize in solving the 'invisible' problems that define a project's success. From optimizing PostgreSQL queries to architecting scalable services, I am passionate about creating the technical foundations that allow users and businesses to thrive.`;

  return (
    <div>
      <motion.div
        className="space-y-4"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div
          className="flex items-center justify-between mb-2"
          variants={item}
        >
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText className="w-5 h-5 text-gray-400" />
            </motion.div>
            <h2 className="text-xl font-semibold text-white">Profile</h2>
          </div>
        </motion.div>

        <motion.p variants={item}>{profile}</motion.p>

        <motion.div className="space-y-4" variants={item}>
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code className="w-5 h-5 text-gray-400" />
            </motion.div>
            <h2 className="text-xl font-semibold text-white">Skills</h2>
          </div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={skillsContainer}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-4 bg-black rounded-lg border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:shadow-lg hover:shadow-black/40"
                variants={skillItem}
                whileHover={{
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <motion.div
                  className="w-8 h-8 mb-2"
                  whileHover={{ rotate: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-end mt-4" variants={item}>
          <motion.button
            className="p-2 w-48 border rounded-md bg-transparent text-white border-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgb(156 163 175)',
              backgroundColor: 'rgba(55, 65, 81, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume;
              link.download = "Kanchan_Basnet_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
            <motion.div
              animate={isHovered ? { y: [0, -3, 0] } : {}}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            >
              <FileDown className="w-4 h-4 text-gray-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
