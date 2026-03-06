'use client';

import { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/raphmwanza/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Filter out forks if desired, or just show everything. 
        // For now, let's show everything but sort by stars then update time? 
        // The API query ?sort=updated gets the most recently active ones.
        setRepos(data);
      } catch (err) {
        setError('Could not load projects at this time.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-ocean-blue" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-white/50 mb-4">{error}</p>
        <Link 
          href="https://github.com/raphmwanza?tab=repositories" 
          target="_blank"
          className="inline-flex items-center gap-2 text-ocean-blue hover:text-white transition-colors"
        >
          View on GitHub <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <div 
          key={repo.id} 
          className="group relative bg-matte-black border border-white/10 rounded-xl overflow-hidden hover:border-ocean-blue/50 transition-all hover:-translate-y-1 h-full flex flex-col"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/5 text-ocean-blue group-hover:bg-ocean-blue/10 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <Link 
                href={repo.html_url} 
                target="_blank" 
                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-blue transition-colors truncate" title={repo.name}>
              {repo.name.replace(/-/g, ' ')}
            </h3>
            
            <p className="text-white/60 text-sm mb-6 flex-grow line-clamp-3">
              {repo.description || 'No description available.'}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex gap-4 text-xs text-white/40 font-mono">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-ocean-blue/50"></span>
                    {repo.language}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3 text-xs text-white/40 font-mono">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" /> {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
          
          {/* Clickable overlay */}
          <Link href={repo.html_url} target="_blank" className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-ocean-blue rounded-xl">
            <span className="sr-only">View {repo.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
