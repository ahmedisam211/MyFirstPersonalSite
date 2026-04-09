import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
  { title: 'Liquid Dimensions', category: 'Digital Art', image: 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/1ede7c976_generated_b5f484a8.png' },
  { title: 'Neon Drift', category: 'Generative', image: 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/80ec86af8_generated_17f5507f.png' },
  { title: 'Chrome Echoes', category: 'Installation', image: 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/7f74007b2_generated_72001179.png' },
  { title: 'Bio Signal', category: 'Experiment', image: 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/077e9f0e7_generated_2a669202.png' },
  { title: 'Void Patterns', category: 'Motion', image: 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/1427a08ad_generated_0cf48ae3.png' },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-10 py-24 md:py-32">
      <SectionHeading color="text-neon-cyan">Projects</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            image={project.image}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}