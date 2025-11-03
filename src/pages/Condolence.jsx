import { useState } from 'react'

const Condolence = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])

  const events = [
    { type: '조문', name: '김철수 과장 부친상', date: '2025-10-28', status: '진행중', file: '부고장.pdf' },
    { type: '결혼', name: '이영희 대리 결혼', date: '2025-10-25', status: '예정', file: '청첩장.jpg' },
    { type: '출산', name: '박민수 부장 자녀 출산', date: '2025-10-20', status: '완료', file: '출생증명서.pdf' },
  ]

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles([...selectedFiles, ...files])
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">경조사 관리</h1>
            <p className="text-gray-600 mt-1">경조사를 신청하고 관리하세요</p>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
            + 경조사 신청
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {['결혼', '출산', '조문', '회갑', '고희', '미수', '졸수'].map((type, idx) => (
            <div key={type} className="bg-white rounded-xl p-6 text-center cursor-pointer hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">{['💍', '👶', '🕯️', '🎂', '🎊', '🎉', '🎈'][idx]}</div>
              <div className="font-medium">{type}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">최근 경조사</h2>
          </div>
          <div className="divide-y">
            {events.map((event, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-bold">{event.name}</div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        event.status === '진행중' ? 'bg-red-100 text-red-700' :
                        event.status === '예정' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{event.type} • {event.date}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{event.file}</span>
                      <button className="text-blue-600 hover:underline ml-2">다운로드</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">경조사 신청</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">경조사 유형</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>결혼</option>
                    <option>출산</option>
                    <option>조문</option>
                    <option>회갑</option>
                    <option>고희</option>
                    <option>미수</option>
                    <option>졸수</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">신청자</label>
                  <input type="text" value="홍길동" className="w-full px-4 py-2 border rounded-lg bg-gray-50" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">증빙 서류 첨부</label>
                  <input type="file" multiple onChange={handleFileSelect} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50">
                    취소
                  </button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    신청하기
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

export default Condolence

