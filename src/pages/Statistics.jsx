const Statistics = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">통계</h1>
          <p className="text-gray-600 mt-1">시설 이용 현황과 통계를 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">회의실 이용</div>
            <div className="text-3xl font-bold text-blue-600 mb-1">856회</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">↑ 12%</span> 전월 대비
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">차량 운행</div>
            <div className="text-3xl font-bold text-green-600 mb-1">234회</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">↑ 8%</span> 전월 대비
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">경조사</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">45건</div>
            <div className="text-sm text-gray-500">
              <span className="text-red-600">↓ 3%</span> 전월 대비
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">콘텐츠 송출</div>
            <div className="text-3xl font-bold text-red-600 mb-1">1,234건</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">↑ 15%</span> 전월 대비
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">월별 회의실 이용 추이</h2>
            <div className="h-64 flex items-end justify-around gap-2">
              {[60, 70, 55, 80, 75, 90].map((height, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-12 bg-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                  <span className="text-xs text-gray-600">{idx + 1}월</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">차량별 운행 비율</h2>
            <div className="flex items-center justify-center h-64">
              <div className="relative w-48 h-48">
                <div className="text-center">
                  <div className="text-2xl font-bold">234회</div>
                  <div className="text-xs text-gray-500">총 운행</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">소나타 40%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">그랜저 32%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">카니발 28%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics

