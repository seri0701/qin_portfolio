import { Center, Stack, Textarea, TextInput, Button } from "@mantine/core"
import { useForm } from "@mantine/form"
import type { NextPage } from "next"
import { Layout } from "components/FixedElement/Layout"
import { client } from "libs/client"

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "ちゃんと入力してください",
    },
  })

  const handleSubmit = async () => {
    await client
      .create({
        endpoint: "contact",
        content: {
          email: "email",
          name: "name",
          message: "message",
        },
      })
      .then((res) => console.log(res.id))
      .catch((err) => console.error(err))
  }

  return (
    <Layout title="Contact">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        style={{ position: "relative" }}
      >
        <Stack spacing="xl">
          <TextInput
            required
            id="email"
            label="メールアドレス"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            required
            id="name"
            label="お名前"
            placeholder="まっつん　しまぶー"
            {...form.getInputProps("name")}
          />
          <Textarea
            // required
            id={"message"}
            label="お問い合わせ内容"
            placeholder=""
            {...form.getInputProps("message")}
          />
          <Center>
            <Button type="submit">送信</Button>
          </Center>
        </Stack>
      </form>
    </Layout>
  )
}

export default Contact
