import { Popover } from '@headlessui/react';
import './styles/App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Header from './components/Header';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Popover className="relative pt-6 pb-16 sm:pb-24">
          {({ open }) => (
            <>
              <Header />
              <Menu open={open} />
              <Main />
            </>
          )}
        </Popover>
      </div>
      <div className="relative pt-2 pb-20 px-4 sm:px-6 lg:pt-2 lg:pb-28 lg:px-8">
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
