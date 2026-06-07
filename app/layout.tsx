import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Client Red Flags — Scan Clients for Payment Risks',
  description: 'AI-powered tool that scans client emails, project descriptions, and online presence for payment red flags. Protect your freelance income.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf9c8070-f274-4919-bc1d-341cac1ad0d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
