import { useState } from 'react'

const Signage = () => {
  const [view, setView] = useState('card')
  const [modalOpen, setModalOpen] = useState(false)

  const signages = [
    { location: '1층 로비', desc: '본관 출입구', status: '정상', content: '회사 소식', duration: '2분 30초', nextUpdate: '오늘 18:00' },
    { location: '3층 회의실', desc: '회의실 구역', status: '정상', content: '회의 일정', duration: '1분 45초', nextUpdate: '실시간' },
    { location: '13층 회의실', desc: '임원 구역', status: '정상', content: 'VIP 안내', duration: '3분 00초', nextUpdate: '내일 09:00' },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">전광판 관리</h1>
            <p className="text-gray-600 mt-1">디지털 사이니지 콘텐츠를 관리하세요</p>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
            + 콘텐츠 등록
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex gap-2">
            {['card', 'monthly', 'weekly', 'daily', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === v ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {v === 'card' ? '카드뷰' : v === 'monthly' ? '월간' : v === 'weekly' ? '주간' : v === 'daily' ? '일일' : '목록'}
              </button>
            ))}
          </div>
        </div>

        {view === 'card' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {signages.map((signage, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{signage.location}</h3>
                      <p className="text-sm text-gray-600 mt-1">{signage.desc}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{signage.status}</span>
                  </div>
                  <div className="text-6xl text-center mb-4">📺</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">현재 콘텐츠</span>
                      <span className="font-medium">{signage.content}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">재생시간</span>
                      <span className="font-medium">{signage.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">다음 업데이트</span>
                      <span className="font-medium">{signage.nextUpdate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">콘텐츠 템플릿</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['📰 회사 소식', '🎬 홍보 영상', '📅 회의 안내', '👔 VIP 안내', '🎂 생일 축하'].map((template) => (
                  <div key={template} className="p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer text-center">
                    <div className="text-3xl mb-2">{template.split(' ')[0]}</div>
                    <div className="font-medium">{template.split(' ')[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {view !== 'card' && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">{view} 뷰가 표시됩니다.</p>
          </div>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">콘텐츠 등록</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">콘텐츠 제목</label>
                  <input type="text" placeholder="예: 2025년 신년사" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">템플릿 선택</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>회사 소식</option>
                    <option>홍보 영상</option>
                    <option>회의 안내</option>
                    <option>VIP 안내</option>
                    <option>생일 축하</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50">
                    취소
                  </button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    등록하기
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

export default Signage

