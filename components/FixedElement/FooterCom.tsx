import type { NextPage } from "next"
import { Box, Text } from "@mantine/core"

export const FooterCom: NextPage = () => {
  return (
    <Box
      component="footer"
      className="mt-4 flex"
      sx={{
        display: "flex",
        flex: "1",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        borderTop: "2px solid #E9ECEF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>©︎ 2022 Shimabu IT University</Text>
    </Box>
  )
}
