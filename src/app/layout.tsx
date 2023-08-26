import type {Metadata} from 'next'
import data from '@/data/data.json';
import {Inter} from 'next/font/google'
import '@/styles/globals.css';
import '@/styles/brands.css';
import LayoutClient from "@/app/layout-client";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>{data.title}</title>

      <meta charSet="utf-8" />
      <meta name="author" content={data.author} />
      <meta name="description" content={data.description} />
    </head>
    <body className={inter.className}>
      <LayoutClient>
        {children}
      </LayoutClient>
    </body>
    </html>
  )
}
