import { motion } from 'framer-motion';
import HeaderNavigation from '../../components/FooterNavigation';
import BlogCards from './BlogCards';
import Seo from '../../components/Seo';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col relative overflow-hidden font-['Outfit']">
      <Seo
        title="Kanchan Basnet - Software Engineer"
        description="A collection of articles where I share insights on programming, web development, and technology trends."
        pathName="blogs"
      />

      {/* Top Navigation */}
      <HeaderNavigation />

      <main className="flex-grow flex flex-col px-4 py-24 pb-32 sm:px-6 lg:px-8 md:pr-24 lg:pr-16">
        <motion.section
          className="container mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto mt-5">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Blogs
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A collection of articles where I share insights on programming, web
              development, and technology trends.
            </motion.p>
          </div>
          <div className="mt-15">
            <BlogCards />
          </div>
        </motion.section>
      </main>


    </div>
  );
};

export default BlogsPage;
