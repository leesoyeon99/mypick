import { useState } from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('system')

  const tabs = [
    { id: 'system', label: '시스템 설정' },
    { id: 'users', label: '사용자 관리' },
    { id: 'rooms', label: '회의실 관리' },
    { id: 'vehicles', label: '차량 관리' },
    { id: 'templates', label: '템플릿 관리' },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">관리자 설정</h1>
          <p className="text-gray-600 mt-1">시스템 설정을 관리하세요</p>
        </div>

        <div className="bg-white rounded-t-lg shadow-sm overflow-x-auto">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 font-semibold'
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-b-lg shadow-sm p-6">
          {activeTab === 'system' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <div className="font-medium">시스템 이름</div>
                  <div className="text-sm text-gray-600">그룹웨어 시스템 이름 설정</div>
                </div>
                <input type="text" defaultValue="T-IME" className="px-4 py-2 border rounded-lg w-64" />
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <div className="font-medium">알림 기능</div>
                  <div className="text-sm text-gray-600">예약 및 승인 알림 활성화</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-6 border-t">
                <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">취소</button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">저장</button>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">사용자 관리</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">+ 사용자 추가</button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4">이름</th>
                    <th className="text-left py-3 px-4">부서</th>
                    <th className="text-left py-3 px-4">직급</th>
                    <th className="text-left py-3 px-4">권한</th>
                    <th className="text-left py-3 px-4">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">홍길동</td>
                    <td className="py-3 px-4">개발팀</td>
                    <td className="py-3 px-4">부장</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">관리자</span></td>
                    <td className="py-3 px-4"><button className="text-blue-600 text-sm hover:underline">수정</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab !== 'system' && activeTab !== 'users' && (
            <div>
              <p className="text-gray-600">{tabs.find(t => t.id === activeTab)?.label} 기능이 여기에 표시됩니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings

