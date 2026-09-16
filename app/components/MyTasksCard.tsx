import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegUser } from "react-icons/fa";

export default function MyTasksCard() {
  return (
    <section>
      <Card className="text-gray-800 dark:text-gray-200 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between border-b p-3 gap-1 font-bold">
            <p className="flex items-center gap-1">
              <span className="bg-gray-500/50 w-8 h-8 rounded-full px-2 text-slate-800 py-px font-bold">
                <FaRegUser className="inline-block" />
              </span>
              My Tasks
            </p>
            <span className="bg-green-500/60 w-6 h-6 rounded-full px-1.5 py-px font-bold">
              3
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-800">
          <div className="w-full flex flex-col gap-1 border border-slate-500/40 p-3 my-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
            <p className="text-lg font-semibold ">Set Up EKS Cluster</p>
            <p className="text-slate-600/60 font-semibold">
              TASK * <span className="font-bold">HIGH Priority</span>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-slate-500/40 p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
            <p className="">Migrate to Playwrite 1.48</p>
            <p className="text-slate-600/60 font-semibold">
              IMPROVEMENT *{" "}
              <span className="font-bold">HIGH Priority</span>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-slate-500/40 p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
            <p className="">Visual Snapshot Comparison</p>
            <p className="text-slate-600/60 font-semibold">
              FEATURE * <span className="font-bold">LOW Priority</span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
