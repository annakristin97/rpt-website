import { HeroImageRight } from '../components/HeroHeader';
import { HeaderSimple } from '../components/Navbar';
import { ServicesGrid } from '../components/ServicesGrid';

export default function HomePage() {
  return (
    <>
      <HeaderSimple links={[{ link: '#', label: 'blabla' }]} />
      <HeroImageRight />
      <ServicesGrid />
    </>
  );
}
