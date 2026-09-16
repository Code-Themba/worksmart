import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function RecentActivity() {
  return (
    <Card className="text-gray-800 dark:text-gray-200 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10">
      <CardHeader>
        <CardTitle className="border-b p-3 gap-1 text-xl font-bold">
          <p>Recent Activity</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Security Audit</p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-gray-700 h-6 w-14 text-center py-0.5 font-bold text-white rounded-md">
              TODO
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Set Up EKS Cluster</p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-gray-700 h-6 w-14 text-center py-0.5 font-bold text-white rounded-md">
              TODO
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Implement CI/CD with Github Actions
              </p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-gray-700 h-6 w-14 text-center py-0.5 font-bold text-white rounded-md">
              TODO
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Migrate to Playwright 1.48
              </p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-orange-400 h-6 min-w-14 text-center py-0.5 px-2 font-bold text-white rounded-md">
              In Progress
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Parallel Test Execution</p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-gray-700 h-6 w-14 text-center py-0.5 font-bold text-white rounded-md">
              TODO
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md hover:cursor-pointer">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Visual Snapshot Comparison
              </p>
              <p className="flex gap-2 text-slate-600 dark:text-gray-400">
                <span>Other</span>
                <span>Oliver Wutts</span>
                <span>Oct 15, 2:53PM</span>
              </p>
            </div>
            <span className="bg-gray-700 h-6 w-14 text-center py-0.5 font-bold text-white rounded-md">
              TODO
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
