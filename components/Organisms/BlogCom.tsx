import { FC } from 'react'
import { BlogM } from 'components/Molecules/BlogM'

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

export const data = [
  {
    id: 'id1',
    title: 'This is a header',
    description:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id1',
    title: 'This is a header',
    description:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id1',
    title: 'This is a header',
    description:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id1',
    title: 'This is a header',
    description:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id1',
    title: 'This is a header',
    description:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
]
