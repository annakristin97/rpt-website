import { createStyles, Text, rem, Center, Grid } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.colors.orange,
    padding: `calc(${theme.spacing.xl} * 2.0)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(28),
    lineHeight: 1,
    fontWeight: 600,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },

  description: {
    color: theme.white,
    fontSize: theme.fontSizes.md,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& + &': {
      paddingLeft: `calc(${theme.spacing.xl} * 1.5)`,
      marginLeft: `calc(${theme.spacing.xl} * 1.5)`,
      borderLeft: `${rem(1)} solid ${theme.white}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.white}`,
      },
    },
  },
}));

interface ServicesProps {
  data: { title: string; description: string; imgPath: string }[];
}

export function Services({ data }: ServicesProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Image src={stat.imgPath} alt="suit_man" width={150} height={42} />
      <Text className={classes.title} align="center">
        {stat.title}
      </Text>
      <Text className={classes.description} align="center">
        {stat.description}
      </Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
