import React from "react";
import * as echarts from "echarts";
import { useEffect } from "react";

export default function ScoreComponent() {
  const option = {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.25, "#94041B"],
              [0.5, "#E39D01"],
              [0.75, "#BDCE03"],
              [1, "#009100"],
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

  return (
    <div className="w-96 h-96">
      <ul class="hidden text-sm font-medium text-center text-gray-500  shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            1Day
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            1Week
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            1Month
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            1Year
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            All
          </a>
        </li>
      </ul>

      <div className="w-full h-full bg-white" id="chart-container"></div>
    </div>
  );
}
