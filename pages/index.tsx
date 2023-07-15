import { Destinations } from '../components/Destinations';
import { HeroImageRight } from '../components/HeroHeader';
import { HeaderSimple } from '../components/Navbar';
import { ServicesGrid } from '../components/ServicesGrid';

export default function HomePage() {
  return (
    <>
      <HeaderSimple
        links={[
          { link: '#services', label: 'Services' },
          { link: '#tours', label: 'Tours' },
          { link: '#contact', label: 'Contact Us' },
        ]}
      />
      <HeroImageRight />
      <section id="services">
        <ServicesGrid />
      </section>
      <section id="tours">
        <Destinations />
      </section>
    </>
  );
}
