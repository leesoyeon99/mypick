import { Link } from 'react-router-dom'

const menuItems = [
  { path: '/', icon: '📊', label: '대시보드' },
  { path: '/meeting-room', icon: '🏢', label: '회의실 예약' },
  { path: '/vehicle', icon: '🚗', label: '차량 예약' },
  { path: '/condolence', icon: '💐', label: '경조사 관리' },
  { path: '/signage', icon: '📺', label: '전광판 관리' },
  { path: '/statistics', icon: '📈', label: '통계' },
  { path: '/settings', icon: '⚙️', label: '관리자 설정' },
]

const Sidebar = ({ isOpen, onClose, currentPath }) => {
  return (
    <>
      {/* 모바일 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed left-0 top-0 w-60 h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-white border-opacity-20">
          <h1 className="text-2xl font-bold">T-IME</h1>
          <p className="text-sm text-blue-200 mt-1">통합 그룹웨어</p>
        </div>

        <nav className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-5 py-3 mx-3 my-1 rounded-lg transition-colors ${
                currentPath === item.path
                  ? 'bg-white bg-opacity-20 font-semibold'
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white border-opacity-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <span>👤</span>
            </div>
            <div>
              <div className="font-medium">홍길동</div>
              <div className="text-xs text-blue-200">관리자</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

