import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan 25", المخطط: 1, الفعلي: 1 },
  { name: "Feb 25", المخطط: 6, الفعلي: 6 },
  { name: "Mar 25", المخطط: 6, الفعلي: 6 },
  { name: "Apr 25", المخطط: 9, الفعلي: 9 },
  { name: "May 25", المخطط: 14, الفعلي: 14 },
  { name: "Jun 25", المخطط: 14, الفعلي: 14 },
  { name: "Jul 25", المخطط: 22, الفعلي: 21 },
  { name: "Aug 25", المخطط: 37, الفعلي: 31 },
  { name: "Sep 25", المخطط: 37, الفعلي: 31 },
  { name: "Oct 25", المخطط: 37, الفعلي: 31 },
];

const ProjectPerformanceSection = () => {
  return (
    <div className="text-gray-300 text-xs flex flex-col justify-between gap-6 h-[300px] overflow-auto p-1">
      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis
              stroke="#ccc"
              domain={[0, 100]}
              width={25}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
            />

            {/* Blue planned line */}
            <Line
              type="monotone"
              dataKey="المخطط"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 3 }}
            />

            {/* Yellow actual line */}
            <Line
              type="monotone"
              dataKey="الفعلي"
              stroke="#facc15"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend at Bottom */}
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#3b82f6] rounded-full"></span>
          <span className="text-gray-300 text-sm">المخطط</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#facc15] rounded-full"></span>
          <span className="text-gray-300 text-sm">الفعلي</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectPerformanceSection;
