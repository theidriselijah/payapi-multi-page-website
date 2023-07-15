import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Public_Sans, DM_Serif_Display } from 'next/font/google'

const public_sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-public'
})

const  dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${public_sans.variable}, ${dm_serif_display.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
