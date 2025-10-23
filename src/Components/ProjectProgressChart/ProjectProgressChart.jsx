import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "التصميمات", المخطط: 100, الفعلي: 100 },
  { name: "أعمال الحفر والردم", المخطط: 95, الفعلي: 96 },
  { name: "أعمال خرسانية", المخطط: 37, الفعلي: 39 },
  { name: "معايير إنشائية وتشطيبات", المخطط: 0, الفعلي: 0 },
];

export default function ProjectPerformanceChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 10 }} />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            width={10}
            domain={[0, 100]}
            tickFormatter={(val) => `${val}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              color: "#fff",
            }}
          />

          <Legend
            content={({ payload }) => (
              <div className="flex justify-center gap-6 mt-2">
                {payload.map((entry, index) => (
                  <div
                    key={`item-${index}`}
                    className="flex items-center gap-2"
                  >
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: entry.color,
                        padding: "4px",
                      }}
                    ></span>
                    <span className="text-gray-300 text-sm">{entry.value}</span>
                  </div>
                ))}
              </div>
            )}
          />

          <Bar dataKey="المخطط" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="الفعلي" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
