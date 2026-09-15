import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { IoCalendarOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";

export default function ProjectOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between border-b p-3 gap-1 text-xl font-bold">
          <p>Project Overview</p>
          <button>
            <ArrowRight />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 border-b p-3 mb-4 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md">
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Kubernetes Migrations</p>
              <p className="text-gray-300">
                Migrate the monolithic app infrastructure to Kubernetes for
                scalability.
              </p>
              <span className="flex gap-5">
                <p className="flex gap-2 items-center text-md">
                  {" "}
                  <span>
                    <MdPeopleOutline />
                  </span>{" "}
                  3 members
                </p>
                <p className="flex gap-2 items-center text-md">
                  <span>
                    <IoCalendarOutline />
                  </span>
                  Jan 20, 2026
                </p>
              </span>
            </div>
            <p className="bg-emerald-500/70 w-20 h-9 text-center rounded-lg p-1 text-lg">
              active
            </p>
          </div>
          <div>
            <span>progress</span>
            <div className="w-full h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b p-3 shadow-md shadow-gray-400/20 dark:shadow-gray-400/10 rounded-md">
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">
                Project: Automated Regression Suite
              </p>
              <p className="text-gray-300">
                Selenium * Playwright hybrid test framework for regression
                testing.
              </p>
              <span className="flex gap-5">
                <p className="flex gap-2 items-center text-md">
                  {" "}
                  <span>
                    <MdPeopleOutline />
                  </span>{" "}
                  3 members
                </p>
                <p className="flex gap-2 items-center text-md">
                  <span>
                    <IoCalendarOutline />
                  </span>
                  Jan 20, 2026
                </p>
              </span>
            </div>
            <p className="bg-emerald-500/70 w-20 h-9 text-center rounded-lg p-1 text-lg">
              active
            </p>
          </div>

          <div>
            <span>progress</span>
            <div className="w-full h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
