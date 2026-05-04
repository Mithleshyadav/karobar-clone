import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { PiNotepad } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  { day: "Cha 16", in: 0, out: 0 },
  { day: "Cha 17", in: 0, out: 0 },
  { day: "Cha 18", in: 0, out: 0 },
  { day: "Cha 19", in: 0, out: 0 },
  { day: "Cha 20", in: 0, out: 0 },
  { day: "Cha 21", in: 0, out: 0 },
  { day: "Cha 22", in: 0, out: 0 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  const inData = payload.find((p) => p.dataKey === "in");
  const outData = payload.find((p) => p.dataKey === "out");

  return (
    <div className="bg-backgrounddeep rounded-lg p-3 shadow-lg">
      {/* Day */}
      <p className="text-white/50 text-base mb-3">{label}</p>

      {/* Money In */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-3 h-3 rounded-sm bg-btnblue"></span>
        <span className="text-white/70 text-sm">
          Money In:{" "}
          <span className="text-green-400 font-medium">
            Rs. {inData?.value ?? 0}
          </span>
        </span>
      </div>

      {/* Money Out */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-sm bg-red-500"></span>
        <span className="text-white/70 text-sm">
          Money Out:{" "}
          <span className="text-red-400 font-medium">
            Rs. {outData?.value ?? 0}
          </span>
        </span>
      </div>
    </div>
  );
};

const CashflowChart = () => {
  return (
    <div className="bg-transparent border border-white/10 rounded-2xl p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">
          Cashflow <span className="text-white/40">(Last 7 Days)</span>
        </h2>

        {/* Dropdown */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent  border border-white/10 text-md text-white/70 transition hover:border-white/20">
          <PiNotepad size={20} />
          Daily
          <MdKeyboardArrowDown size={20} />
        </button>
      </div>

      {/* CHART */}
      <div className="w-full h-[260px] [&_*]:focus:outline-none [&_*]:outline-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} tabIndex={-1} style={{ outline: "none" }}>
            {/* GRID */}
            <CartesianGrid
              strokeDasharray="5 5"
              stroke="rgba(255,255,255,0.08)"
              vertical={false}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 12 }}
            />

            {/* Y AXIS */}
            <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 12 }} />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* LINES */}
            <Line
              type="monotone"
              dataKey="in"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="out"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="flex items-center justify-center gap-8 mt-4 text-sm">
        <div className="flex items-start gap-2">
          {/* Dot */}
          <span className="w-2 h-2 mt-2 rounded-full bg-btnblue"></span>

          {/* Text Block */}
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm">Total Money In</span>

            <span className="text-btnblue font-semibold text-base">Rs. 0</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          {/* Dot */}
          <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>

          {/* Text Block */}
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm">Total Money Out</span>

            <span className="text-red-500 font-semibold text-base">Rs. 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashflowChart;
