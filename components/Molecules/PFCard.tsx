import { FC } from "react"
import { Card, Image, Text, Title } from "@mantine/core"
import dayjs from "dayjs"

type Props = {
  url: string
  title: string
  body: string
  publishedAt: string
}

export const PFCard: FC<Props> = ({ url, title, body, publishedAt }) => {
  // const publishedAt = "2022-08-05T12:48:02.516Z"
  return (
    <>
      <Card>
        <Card.Section>
          <Image src={url} height={160} alt="Norway" />
        </Card.Section>
        <Title order={5} mt="md" mb="xs">
          {title}
        </Title>
        <Text size="sm" color="dimmed">
          {body}
        </Text>
        <time dateTime={publishedAt} className="mt-4 block text-sm">
          {dayjs(publishedAt).format("YYYY年MM月DD日")}
        </time>
      </Card>
    </>
  )
}
