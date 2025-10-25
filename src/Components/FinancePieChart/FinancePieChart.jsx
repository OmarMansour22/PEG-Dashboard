import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "المصروف", value: 45, color: "#10b981" },
  { name: "قيد التنفيذ", value: 25, color: "#f59e0b" },
  { name: "المتبقي", value: 30, color: "#64748b" },
];

// Custom label function that supports labelRadius
const renderLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 40;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function FinancePieChart() {
  return (
    <div className="text-gray-300 text-xs flex flex-col justify-between gap-6 h-[300px] overflow-auto p-1">
      <div className="w-full h-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              label={renderLabel}
              labelLine={true}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <div className="flex justify-center gap-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#10b981] rounded-full"></span>
            المصروف
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#f59e0b] rounded-full"></span>
            قيد التنفيذ
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#64748b] rounded-full"></span>
            المتبقي
          </span>
        </div>
      </div>
    </div>
  );
}
