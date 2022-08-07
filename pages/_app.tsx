import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
