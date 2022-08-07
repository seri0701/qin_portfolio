import { Center, Loader } from '@mantine/core'
import { FC } from 'react'

export const Spinner: FC = () => {
  return (
    <Center>
      <Loader color="pink" />
    </Center>
  )
}
