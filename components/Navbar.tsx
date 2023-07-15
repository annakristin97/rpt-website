import { useState } from 'react';
import { createStyles, Header, Container, Group, rem } from '@mantine/core';
import { LogoWithText } from './LogoWithText';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.white[0],
    borderBottom: 0,
    position: 'sticky',
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.green[0],
      color: theme.colors.white[0],
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [active, setActive] = useState('');
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <LogoWithText />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </div>
      </Container>
    </Header>
  );
}
