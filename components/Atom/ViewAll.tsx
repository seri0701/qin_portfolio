import { FC } from 'react'
import { Button, Center, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'

type Props = {
  Href: string
}

export const ViewAll: FC<Props> = ({ Href }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  return (
    <Center>
      <Link href={Href} prefetch={false}>
        <Button color={dark ? 'yellow' : 'black'} radius="xl" size="xs">
          <a>View All</a>
        </Button>
      </Link>
    </Center>
  )
}
