import { FC } from 'react'
import { Grid } from '@mantine/core'
import { PFCard } from 'components/Molecules/PFCard'

export const PFCardCom: FC = () => {
  return (
    <>
      <Grid gutter="xl">
        {data?.map((item) => (
          <Grid.Col key={item.id} xs={12} sm={4}>
            <PFCard
              src={item.src}
              title={item.title}
              description={item.description}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

export const data = [
  {
    id: 'id 1',
    src: 'vercel.svg',
    title: 'test title 1',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id 2',
    src: 'vercel.svg',
    title: 'test title 2',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id 3',
    src: 'vercel.svg',
    title: 'test title 1',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id 4',
    src: 'vercel.svg',
    title: 'test title 2',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id 5',
    src: 'vercel.svg',
    title: 'test title 2',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
  {
    id: 'id 6',
    src: 'vercel.svg',
    title: 'test title 2',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  },
]
