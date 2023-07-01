import { createStyles, rem, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));
export const PrimaryButton = (props: { content: string }) => {
  const { classes } = useStyles();
  return (
    <Button
      variant="filled"
      color="secondaryGreen"
      size="xl"
      className={classes.control}
      mt={40}
    >
      {props.content}
    </Button>
  );
};
