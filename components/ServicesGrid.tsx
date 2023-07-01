import { Grid, Center } from '@mantine/core';
import { Service } from './Service';

export const ServicesGrid = () => {
  return (
    <Center maw={400} h={100} mx="auto">
    <Grid>
      <Grid.Col span={4}><Service/></Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
    </Center>
  );
}