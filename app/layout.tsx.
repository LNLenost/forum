import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
      title: 'Forum',
        description: 'A simple forum website',
}

export default function RootLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
            <html lang="en">
                  <body className={inter.className}>
                          <header className="bg-primary text-primary-foreground p-4">
                                    <h1 className="text-2xl font-bold">Forum</h1>
                                            </header>
                                                    <main className="container mx-auto p-4">
                                                              {children}
                                                                      </main>
                                                                              <footer className="bg-muted text-muted-foreground p-4 text-center">
                                                                                        © 2023 Forum. All rights reserved.
                                                                                                </footer>
                                                                                                      </body>
                                                                                                          </html>
      )
}
      )
}
}
})
}