import { createStyles, Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

import { LogoWithText } from './LogoWithText';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" color="dimmed" className={classes.description}>
            A small, family-run business, Reykjavik Private Tours & Transfers takes pride in a
            high-end, service-oriented approach. By offering our customers only high-quality
            vehicles and qualified, expert driver-guides with local knowledge we ensure our
            commitment to individual needs and expectations.
          </Text>
        </div>
        <Group spacing={0} position="right">
          <Image
            maw={120}
            mx="auto"
            radius="md"
            src="./ferdamalastofa.png.webp"
            alt="ferdamalastofa logo"
          />
        </Group>
      </Container>
      <Container className={classes.afterFooter}>
        <LogoWithText />
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="xl"
            component="a"
            href="https://www.facebook.com/rvkprivatetours"
            target="_blank"
          >
            <IconBrandFacebook stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="xl"
            component="a"
            href="https://www.instagram.com/reykjavikprivate_tours/"
            target="_blank"
          >
            <IconBrandInstagram stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
