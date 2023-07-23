import { createStyles, rem } from '@mantine/core';
import { Destinations } from '../components/Destinations';
import { HeroImageRight } from '../components/HeroHeader';
import { Navbar } from '../components/Navbar';
import { ServicesGrid } from '../components/ServicesGrid';

const useStyles = createStyles((theme) => ({
  anchor: {
    scrollMarginTop: rem(60),
    scrollBehavior:'smooth'
  },

}));

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <>
      <Navbar
        links={[
          { link: '#services', label: 'Services' },
          { link: '#destinations', label: 'Destinations' },
          { link: '#contact', label: 'Contact Us' },
        ]}
      />
      <HeroImageRight />
      <section id="services" className={classes.anchor}>
        <ServicesGrid />
      </section>
      <section id="destinations" className={classes.anchor}>
        <Destinations />
      </section>
    </>
  );
}
