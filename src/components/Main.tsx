import { ArrowRight, Github, Code2, Shield } from "lucide-react";
import jan from "../images/jan.png";

const Main = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        {/* Profile Image - Larger and Centered */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <img
              alt="Jan Skoruba"
              src={jan}
              className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
              <span className="text-white text-2xl">👋</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="animate-slide-up">
          <h1 className="text-5xl tracking-tight font-extrabold text-blue-500 sm:text-6xl md:text-7xl">
            Jan Škoruba
          </h1>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <Code2 className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Software Developer
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Identity Enthusiast
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          I build modern web applications with{" "}
          <strong className="text-gray-900 dark:text-white">React</strong> and
          design secure APIs with{" "}
          <strong className="text-gray-900 dark:text-white">.NET</strong>.
          Passionate about{" "}
          <strong className="text-gray-900 dark:text-white">
            Identity & Access Management
          </strong>
          , specializing in OpenID Connect and OAuth protocols.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-200"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/skoruba"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
