import { FC } from "react"
import { Anchor, Box, Text, Title } from "@mantine/core"

type Props = {
  id: string
  title: string
  body: string
}

export const BlogM: FC<Props> = ({ id, title, body }) => {
  return (
    <>
      <Box>
        <Anchor className=" text-gray-700" href={`/blog/${id}`} weight={700}>
          <Title order={5} className="mb-2">
            {title}
          </Title>
          <Text size="xs" className="mb-2">
            {body}
          </Text>
        </Anchor>
      </Box>
    </>
  )
}
