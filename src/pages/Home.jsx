import NoiseOverlay from '../components/Noiseoverlay';
import CustomCursor from '../components/customcursor';
import Navbar from '../components/navbar';
import ProgressBar from '../components/Progressbar';
import Hero from '../sections/Hero';
import Projects from '../sections/projects';
import Songs from '../sections/songs';
import Poems from '../sections/poems';
import CoolLinks from '../sections/coolLinks';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="bg-onyx text-ash min-h-screen overflow-x-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <ProgressBar />
      <Navbar />

      <Hero />
      <Projects />
      <Songs />
      <Poems />
      <CoolLinks />
      <Contact />
    </main>
  );
}