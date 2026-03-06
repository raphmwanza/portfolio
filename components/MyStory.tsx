import { MapPin, Plane, Code, Dumbbell, Trophy } from 'lucide-react';

export default function MyStory() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-ocean-blue/50 via-white/10 to-transparent md:left-1/2 md:-ml-px"></div>
      
      <div className="space-y-12">
        {/* Chapter 1: Origins */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
            <h3 className="text-xl font-bold text-white mb-2">From DR Congo to the US</h3>
            <p className="text-white/60 leading-relaxed">
              My journey began in the Democratic Republic of Congo. At age 13, I made a life-changing move to the United States, adapting to a new culture and language while carrying the resilience of my roots.
            </p>
          </div>
          <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-matte-black border-2 border-ocean-blue flex items-center justify-center z-10">
            <MapPin className="w-4 h-4 text-ocean-blue" />
          </div>
          <div className="flex-1 md:w-1/2 md:pl-12"></div>
        </div>

        {/* Chapter 2: Education & Pivot */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-12 hidden md:block"></div>
          <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-matte-black border-2 border-white/20 flex items-center justify-center z-10">
            <Plane className="w-4 h-4 text-white/60" />
          </div>
          <div className="flex-1 md:w-1/2 md:pl-12 pl-12">
            <h3 className="text-xl font-bold text-white mb-2">Finding My Path</h3>
            <p className="text-white/60 leading-relaxed">
              I started college early at Wichita State University at just 17. Initially pursuing Aerospace Engineering, I soon realized my true calling wasn&apos;t in building planes, but in building digital solutions that connect and help people.
            </p>
          </div>
        </div>

        {/* Chapter 3: The Passion */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
            <h3 className="text-xl font-bold text-white mb-2">Building with Purpose</h3>
            <p className="text-white/60 leading-relaxed">
              I pivoted to Computer Science and found my passion in full-stack development. I love the process of turning complex problems into intuitive apps that make a tangible difference in people&apos;s lives.
            </p>
          </div>
          <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-matte-black border-2 border-ocean-blue flex items-center justify-center z-10">
            <Code className="w-4 h-4 text-ocean-blue" />
          </div>
          <div className="flex-1 md:w-1/2 md:pl-12"></div>
        </div>

        {/* Chapter 4: Beyond Code */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-12 hidden md:block"></div>
          <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-matte-black border-2 border-white/20 flex items-center justify-center z-10">
            <Trophy className="w-4 h-4 text-white/60" />
          </div>
          <div className="flex-1 md:w-1/2 md:pl-12 pl-12">
            <h3 className="text-xl font-bold text-white mb-2">Life Outside the Screen</h3>
            <p className="text-white/60 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me at the gym or cheering on my favorite teams. I&apos;m a huge sports fan—Hala Madrid! (Real Madrid) and Dub Nation (Golden State Warriors) all the way.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs font-mono text-white/40">
                <Dumbbell className="w-3 h-3" /> Gym
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs font-mono text-white/40">
                ⚽ Real Madrid
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs font-mono text-white/40">
                🏀 Warriors
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
