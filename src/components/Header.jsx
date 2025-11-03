import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': '대시보드',
  '/meeting-room': '회의실 예약',
  '/vehicle': '차량 예약',
  '/condolence': '경조사 관리',
  '/signage': '전광판 관리',
  '/statistics': '통계',
  '/settings': '관리자 설정',
}

const Header = ({ onMenuClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const location = useLocation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <header className="bg-white h-16 shadow-sm sticky top-0 z-30 flex items-center px-6">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg mr-4"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <h2 className="text-xl font-bold text-gray-800">
        {pageTitles[location.pathname] || '대시보드'}
      </h2>

      <div className="ml-auto flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="text-sm text-gray-600">
          {formatTime(currentTime)}
        </div>
      </div>
    </header>
  )
}

export default Header

