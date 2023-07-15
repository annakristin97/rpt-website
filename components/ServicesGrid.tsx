import { Grid, Center, createStyles, rem } from '@mantine/core';
import { Services } from './Services';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: rem(48),
        marginBottom: rem(48)
    },
  }));

export const ServicesGrid = () => {
    const { classes } = useStyles();


    const servicesData = [
        {
            title: "Private Tours",
            description: "We offer a set of pre-planned tours that you can choose from. We are happy to help you plan your perfect private luxury tour in Iceland and tailor-make tours to suit your individual needs and time frame.",
            imgPath: "/trip_path.svg"
        },
        {
            title: "Airport Transfer",
            description: "Stress-free, luxury airport transfer, making sure you get to where you’re going on time and in style.",
            imgPath: "/airplane.svg"

        },
        {
            title: "Car Service",
            description: "What better way to enjoy Iceland and its capital, beautiful Reykjavik, than with a private chauffeur at your command.",
            imgPath: "/suit_man.svg"
        }
    ]
  return (
    <Center className={classes.wrapper}>
      <Services data={servicesData} />
    </Center>
  );
};
