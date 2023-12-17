import React, { useState } from "react";
import * as echarts from "echarts";
import { useEffect } from "react";
import classNames from "classnames";

export default function ScoreComponent() {
  const option = {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, "#FA4E5E"],
              [0.7, "#3DD6DB"],
              [1, "#0F67FD"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 40,
          fontSize: 15,
        },
        detail: {
          valueAnimation: true,
          // formatter: "{value} km/h",
          color: "inherit",
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };

  useEffect(() => {
    var dom = document.getElementById("chart-container");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }
  }, []);

  const TabList = [
    {
      id: "1day",
      title: "1Day",
    },
    {
      id: "1week",
      title: "1Week",
    },
    {
      id: "1month",
      title: "1Month",
    },
    {
      id: "1year",
      title: "1Year",
    },
    {
      id: "all",
      title: "All",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("all");

  const TabComponent = ({ title, isActive, id }) => {
    return (
      <li className="w-full">
        <button
          onClick={() => setSelectedTab(id)}
          className={classNames(
            "inline-block p-4 text-gray-900 w-full",
            isActive && "bg-[#0D68FD] text-white"
          )}
          aria-current="page"
        >
          {title}
        </button>
      </li>
    );
  };

  return (
    <div className="">
      <label className="font-medium text-xl">Health Score</label>
      <div className="w-[500px] h-[450px] bg-white p-4 mt-2">
        <ul className="justify-between font-medium text-center text-gray-500 text-xs flex bg-[#F2F5FA] rounded">
          {TabList.map((tab) => (
            <TabComponent
              id={tab.id}
              key={tab.id}
              title={tab.title}
              isActive={selectedTab === tab.id}
            />
          ))}
        </ul>

        <div className="w-full h-full" id="chart-container"></div>
      </div>
    </div>
  );
}
