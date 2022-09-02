import type { NextPage } from "next"
import { Center, Stack, Textarea, TextInput, Button } from "@mantine/core"
import { useForm } from "@mantine/form"

import { Layout } from "components/FixedElement/Layout"
import { client } from "libs/client"

type FormValues = {
  email: string
  name: string
  message: string
}

const Contact: NextPage = () => {
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "入力してください"),
    },
  })

  const handleSubmit = async (values: FormValues) => {
    await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        message: values.message,
      }),
    })
    form.reset()
  }

  return (
    <Layout title="Contact">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        style={{ position: "relative" }}
      >
        {/* <LoadingOverlay
          visible={processing.current}
        /> */}
        <Stack spacing="xl">
          <TextInput
            required
            label="メールアドレス"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            required
            label="お名前"
            placeholder="まっつん　しまぶー"
            {...form.getInputProps("name")}
          />
          <Textarea
            required
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
