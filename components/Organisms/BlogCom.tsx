import { FC } from "react"
import { BlogM } from "components/Molecules/BlogM"
import { useQueryPosts } from "hooks/useQyeryPost"

export const BlogCom: FC = () => {
  const { data } = useQueryPosts()
  // console.log(data)

  return (
    <>
      <div>aaa</div>
      {/* {data?.map((item) => (
        <BlogM key={item.id} title={item.title} body={item.body} />
      ))} */}
    </>
  )
}

// export const data = [
//   {
//     id: "id1",
//     title: "This is a header",
//     body:
//       " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
//   },
//   {
//     id: "id2",
//     title: "This is a header",
//     body:
//       " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
//   },
//   {
//     id: "id3",
//     title: "This is a header",
//     body:
//       " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
//   },
//   {
//     id: "id4",
//     title: "This is a header",
//     body:
//       " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
//   },
//   {
//     id: "id5",
//     title: "This is a header",
//     body:
//       " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
//   },
// ]
