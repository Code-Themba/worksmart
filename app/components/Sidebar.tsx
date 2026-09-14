import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  FaArrowRight,
  FaChevronDown,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { LuSquareCheckBig } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen flex flex-col gap-5 bg-gray-100 p-5 border-r border-gray-400/20 shadow-md">
      {/* Workspace Dropdown */}
      <div className="flex items-center gap-2 border-b border-gray-400/20">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="w-full justify-between" />
            }
          >
            <h3 className="font-semibold mb-4 flex items-center gap-20">
              Workspaces{" "}
              <span className="inline-block mt-1">
                <FaChevronDown />
              </span>
            </h3>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>Workspaces</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Workspaces</DropdownMenuLabel>
              <DropdownMenuItem>Workspace 1</DropdownMenuItem>
              <DropdownMenuItem>Workspace 2</DropdownMenuItem>
              <DropdownMenuItem>Workspace 3</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Tabs */}
      <div className="flex flex-col gap-4 font-semibold text-gray-700 ">
        <Link href="#" className="hover:bg-gray-200 p-2 rounded">
          <MdOutlineDashboard className="mr-2 inline" />
          Dashboard
        </Link>
        <Link href="#" className="hover:bg-gray-200 p-2 rounded">
          <FaProjectDiagram className="mr-2 inline" />
          Projects
        </Link>
        <Link href="#" className="hover:bg-gray-200 p-2 rounded">
          <FaUsers className="mr-2 inline" />
          Team
        </Link>
        <Link href="#" className="hover:bg-gray-200 p-2 rounded">
          <GoGear className="mr-2 inline" />
          Settings
        </Link>
      </div>

      {/* Users Tasks */}
      <div className="flex items-center justify-between py-4">
        <h4 className="flex items-center gap-3">
          <LuSquareCheckBig />
          My Tasks{" "}
          <span className="bg-gray-400/30 px-2.5 py-1 rounded-full text-sm font-semibold">
            0
          </span>
        </h4>
        <ChevronDown className="text-gray-500 inline-block" />
      </div>
      {/* Users Projects */}
      <Link href="#">
        <h4 className="flex items-center justify-between">
          My Projects{" "}
          <span className="inline-block">
            <FaArrowRight />
          </span>
        </h4>
      </Link>
    </nav>
  );
}
