import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'

import { Header } from '@/components/body/Header'
import { Footer } from '@/components/body/Footer'
import FlashMessage from '@/components/body/flash/FlashMessage'

export const metadata: Metadata = {
    title: 'Letters',
    description: 'Letters app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-100">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="d-flex flex-column h-100">
                <Header />
                <div id="divFlash" className="mt-4">
                    <FlashMessage />
                </div>
                <main className="container mt-4">{children}</main>
                <Script src="/static/js/bootstrap.bundle.min.js" />
                <Footer />
            </body>
        </html>
    )
}
