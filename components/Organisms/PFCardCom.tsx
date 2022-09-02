import { FC } from "react"
import { useQueryPoFo } from "hooks/useQueryPost"
import { PFCard } from "components/Molecules/PFCard"

export const PFCardCom: FC = () => {
  const { data } = useQueryPoFo()

  return (
    <>
      {data?.contents.map((item) => (
        <PFCard
          key={item.id}
          url={item.image.url}
          title={item.title}
          body={item.body}
          publishedAt={item.publishedAt}
        />
      ))}
    </>
  )
}
