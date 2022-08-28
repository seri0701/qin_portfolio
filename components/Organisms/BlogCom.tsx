import { FC } from "react"
import { BlogM } from "components/Molecules/BlogM"
import { useQueryPosts } from "hooks/useQueryPost"

export const BlogCom: FC = () => {
  const { data } = useQueryPosts()
  // console.log(data)

  return (
    <>
      {data?.contents.map((item) => (
        <BlogM key={item.id} title={item.title} body={item.body} />
      ))}
    </>
  )
}
