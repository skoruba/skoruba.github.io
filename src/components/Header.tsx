import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Logo from '../images/logo.svg';
import Github from '../images/github.svg';

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <span className="sr-only">Logo</span>
            <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />

            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex rounded-md shadow ml-3">
            <a
              href="https://github.com/skoruba"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              rel="noreferrer"
            >
              <img src={Github} className="github-icon" alt="Github" /> Github
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
