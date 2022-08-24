import { FC } from "react"
import { client } from "libs/client"
import { BlogM } from "components/Molecules/BlogM"
import { GetStaticProps } from "next"

export const BlogCom: FC = () => {
  return (
    <>
      {data?.map((item) => (
        <BlogM
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList({ endpoint: "blog" })
  // console.log(data)

  return {
    props: data,
  }
}

export const data = [
  {
    id: "id1",
    title: "This is a header",
    description:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    id: "id2",
    title: "This is a header",
    description:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    id: "id3",
    title: "This is a header",
    description:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    id: "id4",
    title: "This is a header",
    description:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    id: "id5",
    title: "This is a header",
    description:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
]
