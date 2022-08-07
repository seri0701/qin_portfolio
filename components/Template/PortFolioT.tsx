import { FC } from 'react'
import { Title } from '@mantine/core'
import { PFCardCom } from 'components/Organisms/PFCardCom'

export const PortFolioT: FC = () => {
  return (
    <main>
      <div className="mx-2 mb-6">
        <Title order={4} className="my-6">
          PortFolio
        </Title>
        <PFCardCom />
      </div>
    </main>
  )
}
