import { useState } from 'react'

const MeetingRoom = () => {
  const [view, setView] = useState('card')
  const [modalOpen, setModalOpen] = useState(false)

  const rooms = [
    { id: '3F', name: '3층 회의실', type: '소회의실', capacity: 6, status: 'available', equipment: '프로젝터, 화이트보드', nextBooking: '오늘 15:00' },
    { id: '6F', name: '6층 회의실', type: '중회의실', capacity: 12, status: 'occupied', equipment: '빔프로젝터, 음향시스템', nextBooking: '사용중: 10:00 - 12:00' },
    { id: '7F', name: '7층 회의실', type: '소회의실', capacity: 8, status: 'available', equipment: 'TV, 화이트보드', nextBooking: '내일 09:00' },
    { id: '9F', name: '9층 회의실', type: '대회의실', capacity: 20, status: 'available', equipment: '빔프로젝터, 음향, 화상회의', nextBooking: '오늘 예약없음' },
    { id: '10F', name: '10층 회의실', type: '소회의실', capacity: 6, status: 'available', equipment: 'TV, 화이트보드', nextBooking: '오늘 16:00' },
    { id: '11F', name: '11층 회의실', type: '중회의실', capacity: 10, status: 'available', equipment: '빔프로젝터, 화이트보드', nextBooking: '오늘 예약없음' },
    { id: '13F', name: '13층 회의실', type: '임원회의실', capacity: 15, status: 'occupied', equipment: '빔프로젝터, 음향, 화상회의', nextBooking: '사용중: 10:00 - 12:00' },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">회의실 예약</h1>
            <p className="text-gray-600 mt-1">회의실을 예약하고 관리하세요</p>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            + 새 예약
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex gap-2 overflow-x-auto">
            {['card', 'monthly', 'weekly', 'daily', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === v
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {v === 'card' ? '카드뷰' : v === 'monthly' ? '월간' : v === 'weekly' ? '주간' : v === 'daily' ? '일일' : '목록'}
              </button>
            ))}
          </div>
        </div>

        {view === 'card' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{room.type} • 최대 {room.capacity}명</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    room.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {room.status === 'available' ? '사용가능' : '사용중'}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📺</span>
                    <span>{room.equipment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span>다음 예약: {room.nextBooking}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {view !== 'card' && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">{view === 'monthly' ? '월간' : view === 'weekly' ? '주간' : view === 'daily' ? '일일' : '목록'} 뷰가 표시됩니다.</p>
          </div>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">회의실 예약</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">회의실 선택</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    {rooms.map((room) => (
                      <option key={room.id}>{room.name} (최대 {room.capacity}명)</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">예약 날짜</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">시작 시간</label>
                    <input type="time" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">종료 시간</label>
                    <input type="time" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">회의 목적</label>
                  <input type="text" placeholder="예: 프로젝트 킥오프 미팅" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50">
                    취소
                  </button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    예약하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingRoom

