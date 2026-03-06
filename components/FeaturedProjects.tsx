import { ExternalLink, Github, Layers, Map, Database, BarChart3 } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Build Back Better Dashboard",
    description: "Interactive dashboard visualizing government funding across Kansas regions for the Build Back Better program. Used to determine funding allocation strategies.",
    techStack: ["Tableau", "Flask", "Python"],
    icon: <BarChart3 className="w-6 h-6" />,
    // link: "#" // Add link if available
  },
  {
    title: "Kansas Choropleth Map Generator",
    description: "Algorithm that extracts CSV data to generate county-level choropleth maps for data visualization, enabling geographic data analysis.",
    techStack: ["Python", "Pandas", "Matplotlib", "Quarto"],
    icon: <Map className="w-6 h-6" />,
    // link: "#"
  },
  {
    title: "AI Data Analysis Pipeline",
    description: "Java and Python pipelines for feeding structured prompts and training data into AI models like Gemini, improving solution generalization.",
    techStack: ["Java", "Python", "SQL", "Pandas", "Plotly"],
    icon: <Database className="w-6 h-6" />,
    // link: "#"
  }
];

export default function FeaturedProjects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative bg-matte-black border border-white/10 rounded-xl overflow-hidden hover:border-ocean-blue/50 transition-all hover:-translate-y-1 h-full flex flex-col"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/5 text-ocean-blue group-hover:bg-ocean-blue/10 transition-colors">
                {project.icon}
              </div>
              {project.link && (
                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-blue transition-colors">
              {project.title}
            </h3>
            
            <p className="text-white/60 text-sm mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
