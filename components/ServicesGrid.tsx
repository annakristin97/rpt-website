import { Text, Center, createStyles, rem, Badge, Container, Group, Title } from '@mantine/core';
import { Services } from './Services';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: rem(48),
    marginBottom: rem(48),
  },

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.colors.green[0],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing.sm,
    },
  },
}));

export const ServicesGrid = () => {
  const { classes } = useStyles();

  const servicesData = [
    {
      title: 'Private Tours',
      description:
        'We offer a set of pre-planned tours that you can choose from. We are happy to help you plan your perfect private luxury tour in Iceland and tailor-make tours to suit your individual needs and time frame.',
      imgPath: '/trip_path.svg',
    },
    {
      title: 'Airport Transfer',
      description:
        'Stress-free, luxury airport transfer, making sure you get to where you’re going on time and in style.',
      imgPath: '/airplane.svg',
    },
    {
      title: 'Car Service',
      description:
        'What better way to enjoy Iceland and its capital, beautiful Reykjavik, than with a private chauffeur at your command.',
      imgPath: '/suit_man.svg',
    },
  ];
  return (
    <Container py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We offer everything from preplanned guided tours to a private chauffeur during your visit.
      </Text>
      <Center>
        <Services data={servicesData} />
      </Center>
    </Container>
  );
};
