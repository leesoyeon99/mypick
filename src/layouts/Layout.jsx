import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(true)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebarOnMobile = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebarOnMobile} currentPath={location.pathname} />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-60' : ''}`}>
        <Header onMenuClick={toggleSidebar} />
        <main className="min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

