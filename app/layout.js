import './globals.css'
import SideBar from '@/components/SideBar'

export const metadata = {
  title: 'Walenteer',
  description: 'Wallet Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
