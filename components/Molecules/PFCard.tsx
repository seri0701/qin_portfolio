import { FC } from 'react'
import { Card, Grid, Group, Image, Text, Title } from '@mantine/core'

type Props = {
  src: string
  title: string
  description: string
}

export const PFCard: FC<Props> = ({ src, title, description }) => {
  return (
    <>
      <Grid>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={src} height={160} alt="Norway" />
          </Card.Section>
          <Group position="apart" mt="md" mb="xs">
            <Title order={5}>{title}</Title>
          </Group>
          <Text size="sm" color="dimmed">
            {description}
          </Text>
        </Card>
      </Grid>
    </>
  )
}
