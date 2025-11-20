import { Popover } from "@headlessui/react";
import "./styles/App.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative overflow-hidden min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative">
          <Popover className="relative pt-6 pb-16 sm:pb-24">
            {({ open }) => (
              <>
                <Header />
                <Menu open={open} />
                <Main />
              </>
            )}
          </Popover>
          <div className="relative pt-2 pb-20 px-4 sm:px-6 lg:pt-2 lg:pb-28 lg:px-8">
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
