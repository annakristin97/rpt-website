import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  area: {
    color: theme.white,
    backgroundColor: theme.colors.yellow
  }
}));

interface DestinationProps {
    image: string;
    title: string;
    area: string;
    description: string;
    badges: string[];
}

export function Destination({ image, title, description, area, badges }: DestinationProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color='gray'
      key={badge}
    >
      {badge}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" className={classes.area}>{area}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
}