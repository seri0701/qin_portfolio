import { client } from "libs/client"
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

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // API RouteはPOSTできる権限の鍵を隠蔽したいだけのため、バリデーションは一旦オミット
  await insertContact(JSON.parse(req.body))
  res.status(200).send({})
}
export const insertContact = async (contactContent: Omit<Contact, "id">) => {
  await client.create<Omit<ContactRecord, "id">>({
    endpoint: "contact",
    content: contactContent,
  })
}

export default handler
