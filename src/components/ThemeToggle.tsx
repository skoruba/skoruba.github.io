import { Moon, Sun } from "lucide-react";

/** Click handling lives in BaseLayout; the icon follows the `dark` class via CSS. */
const ThemeToggle = () => (
  <button
    type="button"
    data-theme-toggle
    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    aria-label="Toggle theme"
    title="Toggle theme"
  >
    <Moon className="h-[18px] w-[18px] dark:hidden" />
    <Sun className="hidden h-[18px] w-[18px] dark:block" />
  </button>
);

export default ThemeToggle;
