import { Github, Linkedin, Mail, ArrowRight, Download, FileText } from 'lucide-react';
import Link from 'next/link';
import GitHubProjects from '@/components/GitHubProjects';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import MyStory from '@/components/MyStory';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation/Header */}
      <header className="fixed top-0 w-full z-50 bg-matte-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Logo Representation based on user image */}
            <div className="relative flex items-center justify-center w-10 h-10">
               <span className="font-black text-2xl tracking-tighter text-black" 
                     style={{ 
                       WebkitTextStroke: '1.5px #FF0000', 
                       filter: 'drop-shadow(0 0 2px rgba(255,0,0,0.5))'
                     }}>
                 S
               </span>
               {/* Lightning bolt simulation */}
               <svg className="absolute w-8 h-8 text-cyan-400 z-10 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
               </svg>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              SHAMS
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <Link href="#story" className="hover:text-ocean-blue transition-colors">My Story</Link>
            <Link href="#experience" className="hover:text-ocean-blue transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-ocean-blue transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-ocean-blue transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/resume.pdf" // Placeholder for actual resume file
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
            <Link 
              href="mailto:raphmwanza4@gmail.com"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-blue/10 text-ocean-blue text-xs font-mono mb-6 border border-ocean-blue/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-blue"></span>
              </span>
              Full Stack Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Building digital <br/>
              experiences with <span className="text-ocean-blue">purpose</span>.
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
              I&apos;m Raph Mwanza, a Full Stack Engineer proficient in Python, Java, and modern web technologies. 
              I specialize in building scalable backends, intuitive frontends, and AI-driven solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://github.com/raphmwanza" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-matte-black font-medium hover:bg-white/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </Link>
              <Link 
                href="https://www.linkedin.com/in/raph-mwanza-1b1203151/" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section id="story" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">My Story</h2>
            <MyStory />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 sticky top-24">Experience</h2>
              <div className="text-white/50 text-sm leading-relaxed mb-8">
                <p className="mb-4">
                  Bachelor-level educated software engineer with a passion for new tech and clean code.
                </p>
                <p>
                  <strong>Education:</strong><br/>
                  Bachelor of Computer Science<br/>
                  Wichita State University (May 2024)
                </p>
              </div>
              <Link 
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-ocean-blue hover:text-white transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" /> Download Resume
              </Link>
            </div>
            
            <Experience />
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="bg-white/5 py-24 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-white/50">A selection of my recent work from GitHub and professional experience.</p>
              </div>
              <Link href="https://github.com/raphmwanza?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-ocean-blue hover:text-white transition-colors text-sm font-medium">
                View all repositories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <FeaturedProjects />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-white/10 flex-grow"></div>
              <span className="text-white/40 text-sm font-mono">Latest from GitHub</span>
              <div className="h-px bg-white/10 flex-grow"></div>
            </div>

            <GitHubProjects />
            
            <div className="mt-8 md:hidden">
              <Link href="https://github.com/raphmwanza?tab=repositories" target="_blank" className="flex items-center gap-2 text-ocean-blue hover:text-white transition-colors text-sm font-medium">
                View all repositories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
          <div className="bg-gradient-to-br from-ocean-blue/20 to-transparent p-1 rounded-2xl">
            <div className="bg-matte-black rounded-xl p-10 md:p-16 text-center border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s work together</h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
                I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:raphmwanza4@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-ocean-blue text-white font-bold hover:bg-ocean-blue/90 transition-all shadow-lg shadow-ocean-blue/20"
                >
                  <Mail className="w-5 h-5" />
                  Say Hello
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/raph-mwanza-1b1203151/"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-matte-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} raphmwanza.com. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="https://github.com/raphmwanza" target="_blank" className="text-white/40 hover:text-ocean-blue transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/raph-mwanza-1b1203151/" target="_blank" className="text-white/40 hover:text-ocean-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="mailto:raphmwanza4@gmail.com" className="text-white/40 hover:text-ocean-blue transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
