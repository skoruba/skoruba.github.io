const Contact = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-32">
      <div className="text-center">
        <h2
          id="contact"
          className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
        >
          Contact
        </h2>
        <div className="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-6">
          <div>Please, if you have any question, let me know:</div>
          <div className="mt-3 text-1xl tracking-tight font-bold text-gray-600 sm:text-1xl">
            <a href="mailto:jan@skoruba.com" className="text-blue-600">
              jan@skoruba.com
            </a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-6">
          <div>Twitter:</div>
          <div className="mt-3 text-1xl tracking-tight font-bold text-gray-600 sm:text-1xl">
            <a
              href="https://twitter.com/skoruba"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              twitter.com/skoruba
            </a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-6">
          <div>LinkedIn:</div>
          <div className="mt-3 text-1xl tracking-tight font-bold text-gray-600 sm:text-1xl">
            <a
              href="https://linkedin.com/in/skoruba"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              linkedin.com/in/skoruba
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
