import { Transition, Popover } from "@headlessui/react";
import { Fragment } from "react";
import { X, Github, Briefcase, Mail } from "lucide-react";

interface IMenuProps {
  open: boolean;
}

const navigation = [
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
  { name: "Github", href: "https://github.com/skoruba", icon: Github },
];

const Menu = ({ open }: IMenuProps) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
      >
        <div className="rounded-xl shadow-2xl bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gradient">JS</span>
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default Menu;
