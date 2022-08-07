import { FC } from 'react'
import { Space, Title } from '@mantine/core'
import { ViewAll } from 'components/Atom/ViewAll'
import { BlogCom } from 'components/Organisms/BlogCom'

export const BlogT: FC = () => {
  return (
    <main>
      <Space h="xl" />
      <div>
        <Title order={4} className="my-6">
          Blog
        </Title>
        <Space h="md" />
        <BlogCom />
      </div>{' '}
      <Space h="md" />
    </main>
  )
}
