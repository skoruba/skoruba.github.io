import { Github, Linkedin, Twitter } from "lucide-react";
import Icon from "../images/icon.svg";

const social = [
  { label: "GitHub", href: "https://github.com/skoruba", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/skoruba", icon: Linkedin },
  { label: "X", href: "https://x.com/skoruba", icon: Twitter },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white/60 dark:border-slate-800/70 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <img src={Icon} alt="" className="h-6 w-auto" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year} Jan Škoruba · Identity Engineer
          </p>
        </div>
        <div className="flex gap-2">
          {social.map(({ label, href, icon: SocialIcon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-300"
            >
              <SocialIcon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
