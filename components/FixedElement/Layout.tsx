import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { HeaderNavi } from 'components/FixedElement/HeaderNavi'
import { HeaderLine } from 'components/FixedElement/HeaderLine'
import { FooterCom } from './FooterCom'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = 'blog' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderNavi />
      <HeaderLine />
      <div className="flex min-h-screen">
        <div className="mx-auto min-h-screen max-w-3xl flex-col items-center px-2">
          <main>{children}</main>
          <FooterCom />
        </div>
      </div>
    </>
  )
}
