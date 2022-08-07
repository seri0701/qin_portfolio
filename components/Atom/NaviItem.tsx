import { FC } from 'react'
import { Anchor } from '@mantine/core'

type Props = {
  Href: string
  Label: string
}

export const NaviItem: FC<Props> = ({ Href, Label }) => {
  return (
    <Anchor
      href={Href}
      className=" m-3 "
      weight={500}
      color="dimmed"
      sx={{
        '@media (max-width: 800px)': {
          display: 'none',
        },
      }}
    >
      {Label}
    </Anchor>
  )
}
