"use client";

import { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 5, y: 10 },
  { x: 15, y: 15 },
  { x: 25, y: 22 },
  { x: 35, y: 18 },
  { x: 45, y: 32 },
  { x: 55, y: 25 },
  { x: 65, y: 20 },
];

export default function AnimatedLineChart() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-xl mt-20" ref={chartRef}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ left: -30, right: 0, top: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#1f6f5c"
            strokeWidth={2}
            dot={{ r: 4, fill: "#1f6f5c" }}
            activeDot={{ r: 6 }}
            isAnimationActive={isVisible}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
