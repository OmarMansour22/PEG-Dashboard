import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";

const data = [
  { الاحتمالية: 4, التأثير: 4, name: "1", color: "#f97316" },
  { الاحتمالية: 3, التأثير: 3, name: "2", color: "#eab308" },
];

const RiskAssessmentChart = () => {
  return (
    <div className="text-gray-300 text-xs flex flex-col justify-between gap-6 h-[300px] overflow-auto p-1">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff55" />

          {/* X Axis */}
          <XAxis
            type="number"
            dataKey="الاحتمالية"
            domain={[1, 5]}
            stroke="#ccc"
            tickLine={false}
            axisLine={{ stroke: "#ccc" }}
          >
            <Label
              value="الاحتمالية"
              offset={-10}
              position="insideBottom"
              style={{ fill: "#ccc", fontSize: 14 }}
            />
          </XAxis>

          {/* Y Axis */}
          <YAxis
            type="number"
            dataKey="التأثير"
            domain={[1, 5]}
            width={15}
            stroke="#ccc"
            tickLine={false}
            axisLine={{ stroke: "#ccc" }}
          >
            <Label
              value="التأثير"
              angle={-90}
              position="left"
              style={{ fill: "#ccc", fontSize: 14 }}
            />
          </YAxis>

          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value, name) => [`${value}`, name]}
          />

          <Scatter data={data}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} r={40} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskAssessmentChart;
