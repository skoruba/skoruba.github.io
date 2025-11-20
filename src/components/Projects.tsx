import posts from "../data/projects.json";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { useNuGetStats } from "../hooks/useNuGetStats";

const categoryIcons: { [key: string]: any } = {
  "Identity and Access Control": "🔐",
  "Auditing & Logging": "📝",
  "React template": "⚛️",
};

const Projects = () => {
  const { totalDownloads, loading } = useNuGetStats("skoruba");

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US");
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-4">
          <Github className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Open Source Projects
          </span>
        </div>

        <h2
          id="projects"
          className="text-4xl sm:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Open source projects helping developers build secure and scalable
          applications
        </p>

        <div className="mt-8 inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <TrendingUp className="w-6 h-6 text-blue-500" />
          <div className="text-left">
            <div className="text-3xl font-bold text-blue-500">
              {loading ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                <>{formatNumber(totalDownloads)}+</>
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total NuGet Downloads
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post, index) => (
          <div
            key={post.title}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="text-2xl">
                {categoryIcons[post.category.name] || "📦"}
              </span>
            </div>

            <div className="flex-1 p-6">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  {post.category.name}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {post.description}
              </p>

              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all"
              >
                <Github className="w-4 h-4" />
                View Repository
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
