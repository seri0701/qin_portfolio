import { FC } from "react"
import { Space, Title } from "@mantine/core"
import { BlogCom } from "components/Organisms/BlogCom"

export const TwitterT: FC = () => {
  return (
    <main>
      <Space h="xl" />
      <div className="mx-2">
        <Title
          order={4}
          className="mt-6 mb-2 pb-4"
          sx={{
            borderBottom: "3px solid #E9ECEF",
          }}
        >
          Twitter
        </Title>
        <Space h="md" />
        <BlogCom />
      </div>{" "}
      <Space h="md" />
    </main>
  )
}
