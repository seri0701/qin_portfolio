import { FC } from 'react'
import { Grid, Space, Text, Title } from '@mantine/core'
import { BrandTwitter, BrandFacebook, Rss } from 'tabler-icons-react'

export const HeaderLine: FC = () => {
  return (
    <div className=" my-0 flex items-center bg-pink-600 p-12">
      <div className="mx-auto flex">
        <Grid>
          <Grid.Col sm={7} xs={10}>
            <div className=" max-w-2xl flex-col px-2 text-white">
              <Title>Shimabu IT University</Title>
              <Text>せりのポートフォリオのページです</Text>
            </div>
          </Grid.Col>
          <Grid.Col sm={3} xs={0}>
            <Space w="xl" className="mx-20" />
          </Grid.Col>
          <Grid.Col sm={2} xs={12}>
            <div className="my-6 flex items-center">
              <BrandTwitter color={'white'} />
              <BrandFacebook color={'white'} />
              <Rss color={'white'} />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  )
}
