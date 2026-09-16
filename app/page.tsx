import { FaRegFolderOpen, FaTasks } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import ProjectOverview from "./components/dashboard/ProjectOverview";
import MyTasksCard from "./components/dashboard/MyTasksCard";
import OverdueCard from "./components/dashboard/OverdueCard";
import InProgressCard from "./components/dashboard/InProgressCard";
import RecentActivity from "./components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between px-5 py-4 bg-gray-100/2 rounded-sm shadow-md dark:shadow-gray-400">
        <div>
          <h1 className="font-semibold text-2xl">Welcome to the Dashboard!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here{"'"}s what{"'"}s happening with your projects today
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          + New Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 ">
        <div className="flex justify-between border rounded-lg p-3 shadow-md shadow-blue-900">
          <div className="flex flex-col gap-2">
            <p>Total Projects</p>
            <p className="font-semibold text-2xl">2</p>
            <p className="text-sm">projects in Cloud Ops Hub</p>
          </div>
          <span className="w-14 h-14 py-3 px-3.5 rounded-full bg-blue-300/60 text-center">
            <FaRegFolderOpen className="text-3xl " />
          </span>
        </div>
        <div className="flex justify-between border rounded-lg p-3 shadow-md shadow-green-900">
          <div className="flex flex-col gap-2">
            <p>Completed Projects</p>
            <p className="font-semibold text-2xl">0</p>
            <p className="text-lg">of 2 total</p>
          </div>
          <span className="w-14 h-14 py-3 px-3 rounded-full bg-green-300/60 text-center">
            <FiCheckCircle className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between border rounded-lg p-3 shadow-md shadow-purple-900">
          <div className="flex flex-col gap-2">
            <p>My Tasks</p>
            <p className="font-semibold text-xl">1</p>
            <p>assigned to me</p>
          </div>
          <span className="w-14 h-14 p-3 rounded-full bg-purple-300/60 text-center">
            <FaTasks className="text-3xl" />
          </span>
        </div>
        <div className=" flex justify-between border rounded-lg p-3 shadow-md shadow-orange-900">
          <div className="flex flex-col gap-2">
            <p>Overdue</p>
            <p className="font-semibold text-xl">0</p>
            <p>need attention</p>
          </div>
          <span className="w-14 h-14 p-3 rounded-full bg-orange-400/80">
            <IoWarningOutline className="text-3xl font-semibold" />
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        {/* Project Overview */}
        <div className="mt-6 flex flex-col gap-6 flex-2">
          <div>
            <ProjectOverview />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
        {/* My Task */}
        <div className=" mt-6 flex flex-col gap-6 flex-1">
          <div className="">
            <MyTasksCard />
          </div>
          <div>
            <OverdueCard />
          </div>
          <div>
            <InProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
}
