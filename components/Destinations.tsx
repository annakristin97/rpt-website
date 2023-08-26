import { Text, Center, Grid, Title, createStyles, rem, Container, MediaQuery } from '@mantine/core';
import { Destination } from './Destination';
import tripsData from '../data/trips.json';

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: `calc(${theme.spacing.xl} * 3.0)`,
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
          {tripsData.map((destination) => (
            <Grid.Col key={'destination-' + destination.title} md={12} lg={4}>
              <Destination {...destination} />
            </Grid.Col>
          ))}
        </Grid>
      </Center>
    </Container>
  );
};
