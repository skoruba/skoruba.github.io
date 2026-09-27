import { ArrowUpRight, Star } from "lucide-react";
import projects from "../data/projects.json";
import SectionHeading from "./SectionHeading";
import Card from "./Card";

const Projects = () => {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeading
        id="projects"
        title="Projects"
        description="Selected open-source work for Duende IdentityServer and ASP.NET Core Identity."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => {
          const archived = p.status === "archived";
          return (
            <div key={p.name} className="h-full min-w-0">
              <Card href={p.href} className="flex h-full flex-col p-6">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3 className="min-w-0 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                    {p.title}
                    <ArrowUpRight className="ml-1 inline h-4 w-4 align-[-0.1em] text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500" />
                  </h3>
                  <div className="flex shrink-0 items-center gap-2 pt-0.5">
                    {p.featured && (
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-800/70 dark:bg-blue-900/30 dark:text-blue-300">
                        Featured
                      </span>
                    )}
                    {archived && (
                      <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                        Archived
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold tabular-nums text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {p.stars.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.split(" · ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
