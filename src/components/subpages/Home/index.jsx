import About from './sections/About';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Works from './sections/Works';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
