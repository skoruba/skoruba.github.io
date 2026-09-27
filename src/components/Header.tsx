import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../images/logo.svg";
import Icon from "../images/icon.svg";

const nav = [
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center" aria-label="Jan Škoruba – home">
          <img src={Logo} alt="Jan Škoruba" className="hidden h-8 w-auto sm:block" />
          <img src={Icon} alt="Jan Škoruba" className="h-8 w-auto sm:hidden" />
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white sm:px-3"
            >
              {item.name}
            </a>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-slate-200 dark:bg-slate-800 sm:block" />
          <ThemeToggle />
          <a
            href="https://github.com/skoruba"
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-300 md:inline-flex"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
