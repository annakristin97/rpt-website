import { Text, Center, Grid, Title, createStyles, rem, Container } from '@mantine/core';
import { Destination } from './Destination';

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: `calc(${theme.spacing.xl} * 3.0)`
  },

  wrapper: {
    margin: `calc(${theme.spacing.xl} * 2.0)`,
  },

  title: {
    fontSize: rem(34),
    fontWeight: 700,

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

export const Destinations = () => {
  const { classes } = useStyles();

  const destinationsData = [
    {
      image: '/ice_1.jpg',
      title: 'South Coast',
      area: 'Southern Iceland',
      description:
        "Discover the waterfalls, glaciers, and black sand beaches of Iceland's South Coast on this unforgettable, private day tour.",
      badges: ['Waterfall', 'Glacier', 'Black Sand Beach'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Golden Circle',
      area: 'Southern Iceland',
      description:
        'Enjoy the most popular day tour in Iceland with your local, private driver/guide. Meet Icelandic horses, visit waterfalls and hot springs.',
      badges: ['Waterfall', 'Geyser', 'Horses'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Glacier Lagoon',
      area: 'Southern Iceland',
      description:
        'Jökulsarlón is the best known and the largest of a number of glacial lakes in Iceland. Enjoy a private tour along the South Coast with select stops along the way.',
      badges: ['Glacier'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Reykjanes Peninsula',
      area: 'South-West Iceland',
      description:
        'The Reykjanes Peninsula tour offers a great variety of landscapes, lava fissures, lava fields, and geothermal activity. It’s geologically Iceland‘s youngest part and it’s easy to forget that the capital center is less than 30 miles away.',
      badges: ['Lava', 'Geothermal Area'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Snæfellsnes Peninsula',
      area: 'West Iceland',
      description:
        'Join us for an amazing private tour around the spectacular Snæfellsnes Peninsula. This tour will take us around the full peninsula in a day, a day packed with beautiful sights; coastlines, mountains, waterfalls, rock formations, and more.',
      badges: ['Nature???'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Powerplants of Iceland',
      area: '???',
      description:
        'Welcome to our custom-made tour of select power plants in Iceland. Iceland is world-leading in producing and using power from renewable sources, mainly hydro and geothermal and some 99% of the electricity used in Iceland comes from these two sources.',
      badges: ['Renewable Energy', 'Educational'],
    },
    {
      image: '/ice_1.jpg',
      title: 'Blue Lagoon',
      area: 'South-West Iceland',
      description:
        'The Blue Lagoon is one of the most popular tourist destination in Iceland and for a good reason. This incredible lagoon is a must-see and truly a remarkable and unique experience.',
      badges: ['Spa', 'Relaxation', 'Food', 'Geothermal Area'],
    },
  ];
  return (
    <Container className={classes.container}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Destinations
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Examples of tours we offer. Get ready to be blown away!
      </Text>

      <Center className={classes.wrapper}>
        <Grid justify="center">
          {destinationsData.map((destination) => (
            <Grid.Col span={4}>
              <Destination {...destination} />
            </Grid.Col>
          ))}
        </Grid>
      </Center>
    </Container>
  );
};
