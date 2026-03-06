import { Calendar, MapPin } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  techStack: string;
  points: string[];
}

const jobs: Job[] = [
  {
    company: "Alignerr",
    role: "AI Prompt Engineer",
    period: "Jan 2025 – Aug 2025",
    techStack: "Java, Python, SQL, Pandas, Plotly",
    points: [
      "Engineered and optimized prompts in Java, Python, and SQL to drive AI fine-tuning, enabling models like Gemini Data Analysis to solve complex problems with greater consistency.",
      "Developed Java and Python pipelines to feed structured prompts and training data into the AI, improving its ability to generalize solutions across varied scenarios.",
      "Authored Python scripts using Pandas to synthesize and preprocess datapoints, ensuring high-quality inputs for model training.",
      "Built interactive dashboards with Plotly to generate graphic visuals that mirror reference images, enhancing the AI's visual data comprehension during fine-tuning."
    ]
  },
  {
    company: "Outlier.AI",
    role: "SQL AI Trainer (Freelance)",
    period: "June 2024 – Jan 2025",
    techStack: "Python, SQL",
    points: [
      "Developed intricate SQL queries utilizing Joins, Subqueries, and Common Table Expressions (CTEs) to enhance Generative AI's capability in producing optimized and clean code.",
      "Diagnosed and resolved errors in Generative AI responses by debugging Python and Java code which resulted in improved response by the AI."
    ]
  },
  {
    company: "Wichita State University",
    role: "Web Developer Intern",
    period: "April 2023 – Dec 2023",
    techStack: "Python, Tableau, Quarto, Dropbox, R",
    points: [
      "Created stories and dashboards to visualize recorded data using Tableau and Flask. These visualizations were instrumental in the Build Back Better government program for determining funding across different regions in Kansas.",
      "Designed an algorithm that extracts the data from a CSV file and visualizes per county data on a Choropleth map utilizing Python, pandas, matplotlib, Quarto."
    ]
  },
  {
    company: "Developer DB",
    role: "Backend Developer Intern",
    period: "Dec 2022 - March 2023",
    techStack: "Python, Elasticsearch, Java, MongoDB, SSH, Linux",
    points: [
      "Engineered a variety of Elastic Search queries to retrieve Big Data from an Elasticsearch server to convert to a Json and update our Mongo database.",
      "Debugged API calls on the front end to resolve bugs that were negatively impacting sale utilizing Html, CSS and JavaScript."
    ]
  }
];

export default function Experience() {
  return (
    <div className="space-y-12">
      {jobs.map((job, index) => (
        <div key={index} className="relative pl-8 border-l border-white/10 last:border-0">
          <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-ocean-blue shadow-[0_0_10px_rgba(0,105,148,0.5)]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{job.company}</h3>
            <span className="text-xs font-mono text-ocean-blue bg-ocean-blue/10 px-2 py-1 rounded border border-ocean-blue/20 w-fit mt-1 sm:mt-0">
              {job.period}
            </span>
          </div>
          
          <div className="text-lg text-white/80 mb-2 font-medium">{job.role}</div>
          
          <div className="text-sm text-white/40 font-mono mb-4">
            Stack: {job.techStack}
          </div>
          
          <ul className="list-disc list-outside ml-4 space-y-2 text-white/60 text-sm leading-relaxed">
            {job.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
