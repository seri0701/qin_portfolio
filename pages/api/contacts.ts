import { client } from "libs/client"
// import { createClient } from "microcms-js-sdk"
import type { NextApiRequest, NextApiResponse } from "next"

type Contact = {
  id: string
  email: string
  name: string
  message: string
}
type ContactRecord = {
  id: string
  email: string
  name: string
  message: string
}
// const getClient = () => {
//   console.log("seriblog")
//   console.log(process.env.NEXT_PUBLIC_MICROCMS_API_KEY)
//   return createClient({
//     serviceDomain: "seriblog",
//     apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
//   })
// }

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // API RouteはPOSTできる権限の鍵を隠蔽したいだけのため、バリデーションは一旦オミット
  await insertContact(JSON.parse(req.body))
  res.status(200).send({})
}
export const insertContact = async (contactContent: Omit<Contact, "id">) => {
  // const client = getClient()
  await client.create<Omit<ContactRecord, "id">>({
    endpoint: "contacts",
    content: contactContent,
  })
}

export default handler
