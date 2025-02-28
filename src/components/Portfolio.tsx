
import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fashion Brand Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Music Video Production",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Corporate Product Launch",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Wedding Highlight Film",
    category: "Event",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Travel Documentary",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Commercial", "Entertainment", "Corporate", "Event", "Documentary"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-3"
          >
            MY WORK
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4"
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Explore a selection of my professional videography work across different industries.
            Each project represents my dedication to visual storytelling and technical excellence.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/70'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-1 mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-1 mb-2 inline-block">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                  <p className="text-muted-foreground">
                    This project showcases the creative vision and technical expertise that goes into every piece
                    of content I create. The attention to detail and story-driven approach helps brands connect
                    with their audience on a deeper level.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setActiveProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
