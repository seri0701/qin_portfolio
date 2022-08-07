import { FC } from 'react'
import { Text } from '@mantine/core'

export const TitleText: FC = () => {
  return (
    <>
      <Text
        weight={500}
        sx={{
          // '@media (max-width: 800px)': {
          marginLeft: '3rem',
          // },
        }}
      >
        Shimabu IT University
      </Text>
    </>
  )
}
