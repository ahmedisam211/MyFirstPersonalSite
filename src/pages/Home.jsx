import NoiseOverlay from '../components/Noiseoverlay';
import CustomCursor from '../components/CustomcCursor';
import Navbar from '../components/navbar';
import ProgressBar from '../components/ProgressBar';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Songs from '../sections/Songs';
import Poems from '../sections/Poems';
import CoolLinks from '../sections/CoolLinks';
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