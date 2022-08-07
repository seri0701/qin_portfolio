import { FC } from 'react'
import { Space, Title } from '@mantine/core'
import { BlogCom } from 'components/Organisms/BlogCom'
import { Spinner } from 'components/Atom/Spinner'

export const BlogT: FC = () => {
  return (
    <main>
      <Space h="xl" />
      <div className="mx-2">
        <Title order={4} className=" mt-6 mb-3">
          Blog
        </Title>
        <Space h="md" />
        <BlogCom />
        <Spinner />
      </div>{' '}
      <Space h="md" />
    </main>
  )
}
