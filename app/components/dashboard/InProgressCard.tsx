import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CiClock2 } from "react-icons/ci";

export default function InProgressCard() {
  return (
    <div>
      <Card className="text-gray-800 dark:text-white shadow-md shadow-gray-400/20 dark:shadow-gray-400/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between border-b p-3 gap-1 font-bold">
            <p className="flex items-center gap-2">
              <span className="bg-sky-400/75 w-8 h-8 rounded-full px-1 py-0.5 text-slate-800">
                <CiClock2 className="inline-block text-white font-bold text-2xl" />
              </span>
              In Progress
            </p>
            <span className="bg-sky-500/75 w-6 h-6 rounded-full px-1.5 py-px font-bold">
              1
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-800 dark:text-white">
          <div className="flex flex-col gap-4 border border-slate-500/40 p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
            <p className="text-base font-semibold">Migrate to Playwrite 1.48</p>
            <p className="text-slate-600/60 dark:text-gray-400 font-semibold">
              IMPROVEMENT *{" "}
              <span className="font-bold">HIGH Priority</span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
