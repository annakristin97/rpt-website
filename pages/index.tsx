import { HeroImageRight } from '../components/HeroHeader';
import { ServicesGrid } from '../components/ServicesGrid';
import { Welcome } from '../components/Welcome';

export default function HomePage() {
  return (
    <>
      <HeroImageRight />
      <ServicesGrid />
      <Welcome />
    </>
  );
}
