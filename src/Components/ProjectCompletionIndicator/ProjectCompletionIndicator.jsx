export default function ProjectCompletionIndicator() {
  return (
    <div className="flex flex-col justify-between h-[300px] pt-10">
      {/* المخطط له + الحياد */}
      <div className="flex justify-between text-sm text-gray-300 px-3">
        <div className="flex flex-col items-center">
          <span className="text-blue-400 font-semibold">37%</span>
          <span className="text-xs text-gray-400">المخطط له</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 font-semibold">2%-</span>
          <span className="text-xs text-gray-400">الحياد</span>
        </div>
      </div>

      {/* نسبة الإنجاز */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl font-bold text-green-400">35%</div>
        <p className="text-gray-400 mb-3">نسبة الإنجاز الفعلي</p>
        <div className="w-full h-4 bg-yellow-400 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all duration-500"
            style={{ width: "94.5%" }}
          ></div>
        </div>
      </div>

      {/* التوضيح بالألوان */}
      <div className="flex justify-center gap-2 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span>الإنجاز الفعلي</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span>الحياد</span>
        </div>
      </div>
    </div>
  );
}
