import { Mail, Linkedin } from "lucide-react";
import Card from "./Card";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20">
      <Card className="relative mx-auto max-w-4xl overflow-hidden p-8 sm:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2
              id="contact"
              className="scroll-mt-24 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Get in touch
            </h2>
            <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
              Questions about IdentityServer, the Admin UI, or an identity
              project? Write me.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:shrink-0">
            <a href="mailto:jan@skoruba.com" className="btn-primary">
              <Mail className="h-4 w-4" />
              jan@skoruba.com
            </a>
            <a
              href="https://linkedin.com/in/skoruba"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
