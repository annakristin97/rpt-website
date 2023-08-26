import { createStyles, rem } from '@mantine/core';
import { Destinations } from '../components/Destinations';
import { HeroImageRight } from '../components/HeroHeader';
import { Navbar } from '../components/Navbar';
import { ServicesGrid } from '../components/ServicesGrid';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  anchor: {
    scrollMarginTop: rem(60),
    scrollBehavior:'smooth'
  },

}));

export default function HomePage() {
  const { classes } = useStyles();
  const [active, setActive] = useState<string | undefined>(undefined);

  const updateActiveLink = (link?: string) => {
    if(link) setActive(link)
  }

  return (
    <>
      <Navbar
        links={[
          { link: '#services', label: 'Services' },
          { link: '#destinations', label: 'Destinations' },
          { link: '#contact', label: 'Contact Us' },
        ]}
        setActiveLink={updateActiveLink}
        activeLink={active}
      />
      <HeroImageRight setActiveLink={updateActiveLink} />
      <section id="services" className={classes.anchor}>
        <ServicesGrid />
      </section>
      <section id="destinations" className={classes.anchor}>
        <Destinations />
      </section>
      <section id="contact" className={classes.anchor}>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
