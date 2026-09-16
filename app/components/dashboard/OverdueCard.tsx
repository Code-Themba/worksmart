import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoWarningOutline } from "react-icons/io5";

export default function OverdueCard() {
  return (
    <Card className="text-gray-800 dark:text-white shadow-md shadow-gray-400/20 dark:shadow-gray-400/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between border-b p-3 gap-1 font-bold">
          <p className="flex items-center gap-2">
            <span className="bg-orange-500/50 w-8 h-8 rounded-full px-1 text-slate-800 py-px">
              <IoWarningOutline className="inline-block text-white font-black text-2xl" />
            </span>
            Overdue
          </p>
          <span className="bg-orange-500/50 w-6 h-6 rounded-full px-1.5 py-px font-bold">
            0
          </span>
        </CardTitle>
        <CardContent className="text-slate-800">
          <div className="w-full flex flex-col gap-1 p-3 my-4 dark:text-white dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
            <p className="text-center">No overdue tasks</p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
