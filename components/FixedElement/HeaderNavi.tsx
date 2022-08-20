import { FC } from "react"
import { Group } from "@mantine/core"
import { DarkSwitch } from "components/Atom/DarkSwitch"
import { NaviItem } from "components/Atom/NaviItem"
import { TitleText } from "components/Atom/TitleText"
import { DrawerCom } from "components/FixedElement/DrawerCom"

export const HeaderNavi: FC = () => {
  return (
    <div>
      <header className="mx-auto flex h-20 max-w-4xl  items-center justify-between ">
        <Group>
          <DrawerCom />
          <TitleText />
        </Group>
        <Group spacing={3}>
          <NaviItem Href="/about" Label="About" />
          <NaviItem Href="/blog" Label="Blog" />
          <NaviItem Href="/portfolio" Label="Portfolio" />
          <NaviItem Href="/contact" Label="Contact" />
          <DarkSwitch />
        </Group>
      </header>
    </div>
  )
}
