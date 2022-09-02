import { FC } from "react"
import { Title } from "@mantine/core"
import { PFCardCom } from "components/Organisms/PFCardCom2"

export const PortFolioT: FC = () => {
  return (
    <main>
      <div className="mx-2 mb-6">
        <Title
          order={4}
          className="mt-6 mb-2 pb-4"
          sx={{
            borderBottom: "3px solid #E9ECEF",
          }}
        >
          PortFolio
        </Title>
        <PFCardCom />
      </div>
    </main>
  )
}
