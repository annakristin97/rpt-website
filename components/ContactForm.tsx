import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  rem,
  ThemeIcon,
} from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.lightBlue[0]} 0%, ${theme.colors.green[0]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    color: theme.white,
    lineHeight: 1,
  },

  content: {
    color: theme.colors.white,
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  item: {
    display: 'grid',
    gridAutoFlow: 'row',
    alignItems: 'center',
    
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.white,
    color: theme.colors.green[2],
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  itemContent: {
    color: theme.white
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.orange[0],
  },
}));

const data = [
  {
    key: 'phone-number',
    title: 'Phone Number',
    content: '+354 000-0000',
    icon: 'phone'
  },
  {
    key: 'email',
    title: 'Email',
    content: 'travel@rvkcars.com',
    icon: 'mail'
  },
];

export function ContactForm() {
  const { classes } = useStyles();

  const ContactItems = data.map((item) => (
    <div className={classes.item} key={item.key}>
      <ThemeIcon className={classes.itemIcon} size={40} radius="md">
        {item.icon === 'phone' ? <IconPhone /> : <IconMail />}
      </ThemeIcon>

      <div>
        <Text fw={600} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text className={classes.itemContent}>{item.content}</Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.content} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <SimpleGrid
            cols={1}
            spacing={50}
            breakpoints={[{ maxWidth: 550, cols: 1, spacing: 20 }]}
            style={{ marginTop: 30, }}
          >
            {ContactItems}
          </SimpleGrid>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="Your Name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your Message"
            placeholder="What can we do for you?"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send Message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
