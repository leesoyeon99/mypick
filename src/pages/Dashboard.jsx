const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* 환영 메시지 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">안녕하세요, 홍길동님! 👋</h1>
          <p className="text-gray-600">오늘도 좋은 하루 되세요.</p>
        </div>

        {/* 주요 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">🏢</div>
              <div className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">오늘</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8건</div>
            <div className="text-sm text-gray-600">회의실 예약</div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">+12%</span>
              <span className="text-gray-500 ml-2">전주 대비</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">🚗</div>
              <div className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">이용중</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2대</div>
            <div className="text-sm text-gray-600">차량 운행</div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">총 3대 중</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">💐</div>
              <div className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">이번달</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">5건</div>
            <div className="text-sm text-gray-600">경조사</div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">결혼 2, 조문 3</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">📺</div>
              <div className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">운영중</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3개</div>
            <div className="text-sm text-gray-600">전광판 송출</div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">정상 작동</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 오늘의 일정 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">오늘의 일정</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">전체보기 →</button>
            </div>

            <div className="space-y-4">
              <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">임원 회의</div>
                    <div className="text-sm text-gray-600 mt-1">13층 회의실 • 10:00 - 12:00</div>
                    <div className="text-xs text-gray-500 mt-1">참석자: 김부장, 이과장, 박대리</div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium h-fit">진행중</div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🚗</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">출장 (소나타)</div>
                    <div className="text-sm text-gray-600 mt-1">서울 → 부산 • 14:00 - 18:00</div>
                    <div className="text-xs text-gray-500 mt-1">운전자: 최대리</div>
                  </div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium h-fit">예정</div>
                </div>
              </div>

              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">팀 미팅</div>
                    <div className="text-sm text-gray-600 mt-1">7층 회의실 • 15:00 - 16:00</div>
                    <div className="text-xs text-gray-500 mt-1">주간 정기 회의</div>
                  </div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium h-fit">예정</div>
                </div>
              </div>
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">최근 활동</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">전체보기 →</button>
            </div>

            <div className="space-y-4">
              <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💐</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">경조사 신청</div>
                    <div className="text-sm text-gray-600 mt-1">김철수 과장님 부친상</div>
                    <div className="text-xs text-gray-500 mt-1">10분 전</div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏢</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">회의실 예약 완료</div>
                    <div className="text-sm text-gray-600 mt-1">9층 회의실 - 내일 09:00</div>
                    <div className="text-xs text-gray-500 mt-1">25분 전</div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📺</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">전광판 콘텐츠 업데이트</div>
                    <div className="text-sm text-gray-600 mt-1">1층 로비 - 회사 소식</div>
                    <div className="text-xs text-gray-500 mt-1">1시간 전</div>
                  </div>
                </div>
              </div>

              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚗</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">차량 예약 완료</div>
                    <div className="text-sm text-gray-600 mt-1">그랜저 - 내일 14:00</div>
                    <div className="text-xs text-gray-500 mt-1">2시간 전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">빠른 작업</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all">
              <div className="text-3xl mb-2">🏢</div>
              <div className="font-medium text-gray-900">회의실 예약</div>
            </button>
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-medium text-gray-900">차량 예약</div>
            </button>
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all">
              <div className="text-3xl mb-2">💐</div>
              <div className="font-medium text-gray-900">경조사 신청</div>
            </button>
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all">
              <div className="text-3xl mb-2">📺</div>
              <div className="font-medium text-gray-900">전광판 등록</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

