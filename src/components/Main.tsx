import jan from "../images/jan.png";

const Main = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-12">
      <div className="text-center">
        <div className="mb-3">
          <img
            alt="Jan Skoruba"
            src={jan}
            className="personal-img mx-auto w-36"
          />
        </div>
        <h1 className="text-4xl tracking-tight font-extrabold text-blue-600 sm:text-5xl md:text-6xl">
          Jan Škoruba
        </h1>
        <h2 className="mt-3 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          Software Developer & Identity Enthusiast
        </h2>

        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          I am an experienced software developer with a focus on building web
          applications using React and designing web APIs with .NET. <br />
          <br /> My expertise includes identity and access management, with a
          keen interest in OpenID Connect and OAuth protocols.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#projects"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Projects
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
