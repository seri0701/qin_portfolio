import { FC } from "react"
import { Grid } from "@mantine/core"
import { PFCard } from "components/Molecules/PFCard"

export const PFCardCom: FC = () => {
  return (
    <>
      <Grid gutter="xl" className="mt-4">
        {data?.map((item) => (
          <Grid.Col key={item.id} xs={12} sm={4}>
            <PFCard
              src={item.src}
              title={item.title}
              description={item.description}
              publishedAt={item.publishedAt}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

export const data = [
  {
    id: "id 1",
    src: "Thumbnail.png",
    title: "test title 1",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
  {
    id: "id 2",
    src: "Thumbnail.png",
    title: "test title 2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
  {
    id: "id 3",
    src: "Thumbnail.png",
    title: "test title 1",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
  {
    id: "id 4",
    src: "Thumbnail.png",
    title: "test title 2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
  {
    id: "id 5",
    src: "Thumbnail.png",
    title: "test title 2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
  {
    id: "id 6",
    src: "Thumbnail.png",
    title: "test title 2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    publishedAt: "2022-08-05T12:48:02.516Z",
  },
]
