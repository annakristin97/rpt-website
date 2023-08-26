import { createStyles, rem, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));
export const PrimaryButton = (props: {
  content: string;
  href?: string;
  onLinkClick?: Function;
}) => {
  const { classes } = useStyles();
  return (
    <Button
      variant="filled"
      color="secondaryGreen"
      size="xl"
      className={classes.control}
      component="a"
      href={props.href}
      onClick={(_) => {
        if (props.onLinkClick) props.onLinkClick(props.href);
      }}
      mt={40}
    >
      {props.content}
    </Button>
  );
};
