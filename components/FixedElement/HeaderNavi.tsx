import { FC } from 'react'
import { Group } from '@mantine/core'
import { DarkSwitch } from 'components/Atom/DarkSwitch'
import { NaviItem } from 'components/Atom/NaviItem'
import { TitleText } from 'components/Atom/TitleText'
import { DrawerCom } from 'components/FixedElement/DrawerCom'

export const HeaderNavi: FC = () => {
  return (
    <div>
      <header className="flex h-20 items-center justify-between">
        <Group>
          <DrawerCom />
          <TitleText />
        </Group>
        <Group spacing={3}>
          <NaviItem Href="/" Label="About" />
          <NaviItem Href="/" Label="Blog" />
          <NaviItem Href="/" Label="Prortfolio" />
          <NaviItem Href="/" Label="Contact" />
          <DarkSwitch />
        </Group>
      </header>
    </div>
  )
}
