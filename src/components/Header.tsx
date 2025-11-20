import { Popover } from "@headlessui/react";
import { Menu, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt="Jan Škoruba"
              />
            </a>

            <div className="-mr-2 flex items-center md:hidden gap-2">
              <ThemeToggle />
              <Popover.Button className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 gap-3">
          <ThemeToggle />
          <span className="inline-flex rounded-md shadow-sm">
            <a
              href="https://github.com/skoruba"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" /> Github
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
