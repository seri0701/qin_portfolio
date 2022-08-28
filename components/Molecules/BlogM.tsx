import { FC } from "react"
import { Box, Text, Title } from "@mantine/core"

type Props = {
  title: string
  body: string
}

export const BlogM: FC<Props> = ({ title, body }) => {
  return (
    <>
      <Box>
        <Title order={5} className="mb-2">
          {title}
        </Title>
        <Text size="xs" className="mb-2">
          {body}
        </Text>
      </Box>
    </>
  )
}
