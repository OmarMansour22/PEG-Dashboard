import { FaInfoCircle } from "react-icons/fa";

const projectData = [
  { label: "قيمة المشروع", value: "12,354,579 ريال" },
  { label: "القطاع", value: "الورد" },
  { label: "المرحلة", value: "بناء" },
  { label: "مدة المشروع", value: "16 شهر" },
  { label: "الاستشاري", value: "إنارة للاستشارات الهندسية" },
  {
    label: "حالة المشروع",
    value: (
      <span className="text-green-400 font-semibold flex items-center gap-1">
        <FaInfoCircle className="text-green-400" /> منتظم
      </span>
    ),
  },
  { label: "اسم المقاول", value: "مؤسسة حلول الصيانة للمقاولات" },
  { label: "نوع المشروع", value: "إنشائي" },
];

export default function ProjectCard() {
  return (
    <div className="text-gray-300 text-xs flex flex-col justify-between gap-6">
      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-700 pb-1"
          >
            <span>{item.label}:</span>
            <span className="font-semibold text-white">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Duration section */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <div className="text-center">
            <p>تاريخ بداية المشروع</p>
            <p className="text-white font-semibold mt-1">2023/01/15</p>
          </div>
          <div className="text-center">
            <p>تاريخ نهاية المشروع</p>
            <p className="text-white font-semibold mt-1">2024/08/15</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full bg-gray-700 h-4 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-blue-500 w-[56%] rounded-l-full"></div>
          <div className="absolute right-0 top-0 h-full bg-yellow-500 w-[44%] rounded-r-full"></div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-xs text-gray-400 mt-3">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> المدة
            الفعلية
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span> المدة
            المخطط لها
          </div>
        </div>
      </div>
    </div>
  );
}
