import { ArrowRight, Github, MapPin, Users } from "lucide-react";
import { useGitHubFollowers } from "../hooks/useGitHubFollowers";
import jan from "../images/jan.png";
import TokenCard from "./TokenCard";

const tags = ["OpenID Connect", "OAuth 2.1", "FAPI 2.0", "DPoP", "PAR"];

const Hero = () => {
  const followers = useGitHubFollowers("skoruba");

  return (
    <section className="relative pb-6 pt-12 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <div className="animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-300 opacity-70 blur-sm" />
              <img
                src={jan}
                alt="Jan Škoruba"
                width={112}
                height={112}
                className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-900 sm:h-28 sm:w-28"
              />
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.05s" }}>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              <span className="text-gradient">Jan Škoruba</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
              Identity Engineer
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              Prague, Czech Republic
            </p>
          </div>

          <p
            className="mx-auto mt-5 max-w-xl animate-slide-up text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0"
            style={{ animationDelay: "0.1s" }}
          >
            I build open-source identity tooling.
          </p>

          <ul
            className="mt-5 flex animate-slide-up flex-wrap justify-center gap-2 lg:justify-start"
            style={{ animationDelay: "0.15s" }}
          >
            {tags.map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>

          <div
            className="mt-7 flex animate-slide-up flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="#projects" className="btn-primary group">
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/skoruba"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary group"
              aria-label={
                followers !== null
                  ? `GitHub profile, ${followers.toLocaleString("en-US")} followers`
                  : undefined
              }
              title={followers !== null ? `${followers.toLocaleString("en-US")} followers` : undefined}
            >
              <Github className="h-4 w-4" />
              GitHub profile
              {followers !== null && (
                <span className="inline-flex animate-fade-in items-center gap-1 border-l border-slate-200 pl-3 ml-1 tabular-nums text-slate-500 transition-colors group-hover:border-blue-200 group-hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:group-hover:border-blue-800 dark:group-hover:text-blue-300">
                  <Users className="h-3.5 w-3.5" />
                  {followers.toLocaleString("en-US")}
                </span>
              )}
            </a>
          </div>
        </div>

        <div
          className="mx-auto min-w-0 w-full max-w-md animate-slide-up lg:max-w-none"
          style={{ animationDelay: "0.25s" }}
        >
          <TokenCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
