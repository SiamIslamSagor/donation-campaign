import { useContext } from "react";
import { DonatedDataContext } from "../Home/Home";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Statistics = () => {
  const donatedData = useContext(DonatedDataContext);
  const myDonation = donatedData.length;
  const totalDonation = 12;
  const myDonationPercent = (myDonation / totalDonation) * 100;
  const totalDonationPercent = 100 - myDonationPercent;

  const data = [
    {
      name: `Total donation`,
      value: totalDonationPercent.toFixed(1) / 1,
    },
    {
      name: "Your donation",
      value: myDonationPercent.toFixed(1) / 1,
    },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-4xl font-medium"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className="flex gap-10 flex-col items-center justify-center h-[70vh]">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={180}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          strokeWidth={4}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-4">
          <p>Your Donation</p>
          <div className="bg-[#00C49F] h-[12px] w-[100px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>Total Donation</p>
          <div className="bg-[#FF444A] h-[12px] w-[100px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
