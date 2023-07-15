import { createStyles, rem } from '@mantine/core';
import { Destinations } from '../components/Destinations';
import { HeroImageRight } from '../components/HeroHeader';
import { HeaderSimple } from '../components/Navbar';
import { ServicesGrid } from '../components/ServicesGrid';

const useStyles = createStyles((theme) => ({
  anchor: {
    scrollMarginTop: rem(56),
  },

}));

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <>
      <HeaderSimple
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
