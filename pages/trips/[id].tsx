import { GetStaticProps, GetStaticPaths } from 'next';
import tripsData from '../../data/trips.json';
import { Button, Title, createStyles, rem, Image, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { ContactForm } from '../../components/ContactForm';

const useStyles = createStyles((theme) => ({
  wrapper: {
    scrollMarginTop: rem(60),
    scrollBehavior: 'smooth',
    display: 'flex',
    flexDirection: 'column',
    marginTop: rem(40),
    gap: rem(40),
  },

  title: {
    textAlign: 'center',
  },

  homeButton: {},

  contactForm: {},
}));

interface tripInterface {
  id: string;
  image: string;
  title: string;
  area: string;
  description: string;
  badges: string[];
}

export const trips = (props: { specificTripData: tripInterface; hasError: boolean }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.homeButton}
        component="a"
        href="/"
        leftIcon={<IconChevronLeft />}
        variant="white"
      >
        Back Home
      </Button>
      <Image
        src={props?.specificTripData?.image}
        alt={props?.specificTripData?.title}
        height={rem(400)}
        width="fill"
      />

      <Title className={classes.title} order={1}>
        {props?.specificTripData?.title}
      </Title>
      <Text ta="center" fz="md">
        {props?.specificTripData?.description}
      </Text>
      <div className={classes.contactForm}>
        <ContactForm heading={`Want to book ${props?.specificTripData?.title}?`} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const itemID = context.params?.id;
  const foundItem = tripsData.find((item: tripInterface) => itemID === item.id);

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificTripData: foundItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsWithParams = tripsData.map((trip: tripInterface) => ({
    params: { id: trip.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default trips;
