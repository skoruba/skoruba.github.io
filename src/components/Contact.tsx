import { Mail, Twitter, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "jan@skoruba.com",
      href: "mailto:jan@skoruba.com",
      description: "Drop me an email",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@skoruba",
      href: "https://twitter.com/skoruba",
      description: "Follow me on Twitter",
      gradient: "from-sky-500 to-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/skoruba",
      href: "https://linkedin.com/in/skoruba",
      description: "Connect on LinkedIn",
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto mt-32">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-4">
          <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Let's Connect
          </span>
        </div>

        <h2
          id="contact"
          className="text-4xl sm:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Get in Touch
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12">
          Have a question or want to collaborate? I'd love to hear from you!
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {contact.label}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {contact.description}
                  </p>

                  <p className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                    {contact.value}
                  </p>
                </div>

                {/* Bottom Border Effect */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${contact.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
