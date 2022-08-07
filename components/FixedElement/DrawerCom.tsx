import { FC, useState } from 'react'
import { Anchor, Burger, Drawer } from '@mantine/core'

export const DrawerCom: FC = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        // title={title}
        size="sm"
        className="mx-3"
        sx={{
          '@media (min-width: 800px)': {
            display: 'none',
          },
        }}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="xl"
        className="bg-pink-600"
        color="white"
      >
        <div className="m-3 flex flex-col text-3xl">
          <Anchor href="/" weight={700} className=" text-white">
            About
          </Anchor>
          <Anchor href="/" weight={700} className=" text-white">
            Blog
          </Anchor>
          <Anchor href="/" weight={700} className=" text-white">
            Portfolio
          </Anchor>
          <Anchor href="/" weight={700} className=" text-white">
            Contact
          </Anchor>
        </div>
      </Drawer>
    </div>
  )
}
