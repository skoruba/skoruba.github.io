import posts from "../data/projects.json";
import { FingerPrintIcon } from "@heroicons/react/outline";

const Projects = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h2
          id="projects"
          className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl"
        >
          Projects
        </h2>
        <div className="max-w-3xl mx-auto text-xl text-gray-500 sm:mt-6">
          <div>
            My open source projects which help a lot of people to build amazing
            applications.
          </div>
          <div className="mt-3 text-1xl tracking-tight font-extrabold text-gray-600 sm:text-1xl">
            4 milions downloads of my{" "}
            <a
              className="text-blue-600"
              target="_blank"
              rel="noreferrer"
              href="https://www.nuget.org/profiles/skoruba"
            >
              nuget packages
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-600">
                  {post.category.name}
                </p>
                <a
                  href={post.href}
                  className="block mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-xl font-semibold text-gray-900">
                    <span className="inline-flex px-1">
                      <FingerPrintIcon height={20} />
                    </span>
                    <span>{post.title}</span>
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
