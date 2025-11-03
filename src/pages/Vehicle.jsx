import { useState } from 'react'

const Vehicle = () => {
  const [view, setView] = useState('card')
  const [modalOpen, setModalOpen] = useState(false)

  const vehicles = [
    { name: '소나타', plate: '12가 3456', status: 'in-use', fuel: 70, driver: '최대리', returnTime: '18:00' },
    { name: '그랜저', plate: '34나 5678', status: 'available', fuel: 95, location: 'B1층 3번', nextBooking: '내일 14:00' },
    { name: '카니발', plate: '56다 7890', status: 'in-use', fuel: 60, driver: '박과장', returnTime: '17:00' },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">차량 예약</h1>
            <p className="text-gray-600 mt-1">법인 차량을 예약하고 관리하세요</p>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
            + 새 예약
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex gap-2">
            {['card', 'monthly', 'weekly', 'daily', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === v ? 'bg-green-600 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {v === 'card' ? '카드뷰' : v === 'monthly' ? '월간' : v === 'weekly' ? '주간' : v === 'daily' ? '일일' : '목록'}
              </button>
            ))}
          </div>
        </div>

        {view === 'card' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div key={vehicle.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{vehicle.plate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    vehicle.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {vehicle.status === 'available' ? '사용가능' : '운행중'}
                  </span>
                </div>
                <div className="text-6xl mb-4 text-center">🚗</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>⛽ 연료</span>
                    <span className="font-medium">{vehicle.fuel}%</span>
                  </div>
                  {vehicle.driver ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span>👤 운전자</span>
                        <span className="font-medium">{vehicle.driver}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>⏰ 반납예정</span>
                        <span className="font-medium">{vehicle.returnTime}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span>📍 주차위치</span>
                        <span className="font-medium">{vehicle.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>⏰ 다음예약</span>
                        <span className="font-medium">{vehicle.nextBooking}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {view !== 'card' && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">{view} 뷰가 표시됩니다.</p>
          </div>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">차량 예약</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">차량 선택</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    {vehicles.map((v) => (
                      <option key={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">사용 날짜</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">출발 시간</label>
                    <input type="time" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">반납 시간</label>
                    <input type="time" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">목적지</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 px-6 py-3 border rounded-lg">
                    취소
                  </button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg">
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

export default Vehicle

