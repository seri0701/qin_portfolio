import { FC } from 'react'
import { Box, Text, Title } from '@mantine/core'

type Props = {
  title: string
  description: string
}

export const BlogM: FC<Props> = ({ title, description }) => {
  return (
    <>
      <Box>
        <Title order={5} className="mb-2">
          {title}
        </Title>
        <Text size="xs" className="mb-2">
          {description}
        </Text>
      </Box>
    </>
  )
}
