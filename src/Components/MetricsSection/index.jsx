import React from "react";
import BellIcon from "@/Components/Icons/BellIcon";
import FitnessIcon from "@/Components/Icons/FitnessIcon";
import Heartbeat from "@/Components/Icons/Heartbeat";
import MessageIcon from "@/Components/Icons/MessageIcon";
import Piechart from "@/Components/Icons/Piechart";
import SearchIcon from "@/Components/Icons/SearchIcon";
import StatisticIcon from "@/Components/Icons/StatisticIcon";

export default function MetricsSection() {
  return (
    <div className="w-full">
      <div className="flex items-center w-full space-x-6">
        <div className="flex items-center relative w-full">
          <div className="absolute left-4">
            <SearchIcon />
          </div>
          <input
            className="bg-gray-200/70 py-3 pl-11 w-full rounded"
            placeholder="Seach anything..."
          />
        </div>
        <div className="flex space-x-3">
          <div className="border relative border-gray-400 p-2.5 cursor-pointer rounded">
            <span className="absolute -top-3 -right-2 bg-[#FA4E5E] text-xs flex items-center justify-center px-2 py-1 rounded-full text-white">
              8
            </span>
            <BellIcon />
          </div>
          <div className="border border-gray-400 p-2.5 cursor-pointer rounded">
            <MessageIcon />
          </div>
        </div>
      </div>

      <div className="flex mt-4 space-x-10">
        <div className="flex items-end w-full space-x-10">
          <div className="w-full max-w-xs">
            <label className="text-xl font-medium">Activite Tracker</label>
            <div className="bg-white flex text-black pl-4 py-[34px] rounded shadow-md mt-2 space-x-5">
              <div className="w-20 h-20 bg-[#EDF6FF] flex items-center justify-center p-5">
                <FitnessIcon />
              </div>

              <div className="flex flex-col justify-between">
                <label className="font-medium text-2xl">Steps Taken</label>
                <span className="font-normal text-4xl">18751</span>
              </div>
            </div>
          </div>
          <div className="flex items-end w-full space-x-2">
            <div className="w-full">
              <label className="text-xl font-medium">Health Metrics</label>
              <div className="bg-[#0F67FD] text-white mt-2 flex flex-col shadow-3xl pl-4 pt-4 rounded shadow-md">
                <label className="font-medium text-3xl">
                  65{" "}
                  <span className="text-sm text-gray-200 font-normal">BPM</span>
                </label>
                <span className="font-medium text-base">Heart Rate</span>
                <div className="w-16 h-16 mt-2">
                  <Heartbeat />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#FA4E5E] text-white flex flex-col shadow-3xl pl-4 pt-4 rounded shadow-md">
                <label className="font-medium text-3xl">
                  120{" "}
                  <span className="text-sm text-gray-200 font-normal">
                    mmHg
                  </span>
                </label>
                <span className="font-medium text-base">Blood Pressure</span>
                <div className="w-16 h-16 mt-2">
                  <Piechart />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#3DD6DB] text-white flex flex-col shadow-3xl pl-4 pt-4 rounded shadow-md">
                <label className="font-medium text-3xl">
                  87{" "}
                  <span className="text-sm text-gray-200 font-normal">
                    hours
                  </span>
                </label>
                <span className="font-medium text-base">Sleep</span>
                <div className="w-16 h-16 mt-2">
                  <StatisticIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
