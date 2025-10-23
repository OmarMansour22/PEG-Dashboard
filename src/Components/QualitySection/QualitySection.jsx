import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS1 = ["#a78bfa", "#facc15", "#22d3ee", "#f97316", "#64748b"];
const COLORS2 = ["#a78bfa", "#facc15", "#22d3ee", "#f97316", "#64748b"];

const data1 = [
  { name: "معتمد بدون ملاحظات", value: 504 },
  { name: "تحت الدراسة", value: 83 },
  { name: "مرفوض", value: 7 },
  { name: "بعد التسليم", value: 1 },
  { name: "معتمد مع ملاحظات", value: 26 },
];

const data2 = [
  { name: "معتمد بدون ملاحظات", value: 407 },
  { name: "تحت الدراسة", value: 279 },
  { name: "مرفوض", value: 11 },
  { name: "بعد التسليم", value: 13 },
  { name: "معتمد مع ملاحظات", value: 21 },
];

// Custom label renderer with arrow
const renderArrowLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const startX = cx + outerRadius * cos;
  const startY = cy + outerRadius * sin;
  const endX = cx + (outerRadius + 12) * cos;
  const endY = cy + (outerRadius + 12) * sin;
  const textX = cx + (outerRadius + 20) * cos;
  const textY = cy + (outerRadius + 20) * sin;

  return (
    <g>
      {/* arrow line */}
      <path
        d={`M${startX},${startY}L${endX},${endY}`}
        stroke="#ccc"
        strokeWidth={1.5}
        fill="none"
      />
      {/* text percentage */}
      <text
        x={textX}
        y={textY}
        textAnchor={cos >= 0 ? "start" : "end"}
        dominantBaseline="central"
        fontSize={10}
        fill="#ccc"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    </g>
  );
};

export default function QualitySection() {
  return (
    <div className="text-white rounded-2xl flex flex-col items-center w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
        {/* Chart 1 */}
        <div className="w-[250px] h-[250px] relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={65}
                dataKey="value"
                labelLine={false}
                label={renderArrowLabel}
                paddingAngle={3}
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS1[index % COLORS1.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">652</p>
            <p className="text-sm text-gray-300">استلامات أعمال</p>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="w-[250px] h-[250px] relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={65}
                dataKey="value"
                labelLine={false}
                label={renderArrowLabel}
                paddingAngle={3}
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell2-${index}`}
                    fill={COLORS2[index % COLORS2.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">731</p>
            <p className="text-sm text-gray-300">اعتمادات فنية</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#a78bfa]" />
          <span>معتمد بدون ملاحظات</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#facc15]" />
          <span>تحت الدراسة</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#22d3ee]" />
          <span>مرفوض</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#f97316]" />
          <span>بعد التسليم</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#64748b]" />
          <span>معتمد مع ملاحظات</span>
        </div>
      </div>
    </div>
  );
}
