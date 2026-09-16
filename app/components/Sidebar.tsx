"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative fixed w-64 flex flex-col gap-5 bg-gray-100 py-6 px-3 border-r border-gray-400/20 shadow-md dark:bg-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800">
      {/* Workspace Dropdown */}
      <div className="w-full flex items-center gap-2 border-b border-gray-400/20">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="w-full justify-between" />
            }
          >
            <p className="text-xl font-semibold mb-4 flex items-center gap-20">
              Workspaces{" "}
              <span className="inline-block mt-1">
                <FaChevronDown />
              </span>
            </p>
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
      <div className="w-full flex flex-col gap-4 font-semibold ">
        <Link
          href="#"
          className="hover:bg-gray-200 hover:text-slate-900 p-2 rounded"
        >
          <MdOutlineDashboard className="mr-2 inline" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="hover:bg-gray-200 hover:text-slate-900 p-2 rounded"
        >
          <FaProjectDiagram className="mr-2 inline" />
          Projects
        </Link>
        <Link
          href="#"
          className="hover:bg-gray-200 hover:text-slate-900 p-2 rounded"
        >
          <FaUsers className="mr-2 inline" />
          Team
        </Link>
        <Link
          href="#"
          className="hover:bg-gray-200 hover:text-slate-900 p-2 rounded"
        >
          <GoGear className="mr-2 inline" />
          Settings
        </Link>
      </div>

      {/* Users Tasks */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between py-4 px-1 font-semibold hover:bg-gray-200 hover:text-slate-900 rounded-md ${isOpen && "bg-gray-400/20"}`}
      >
        <h4 className="flex items-center gap-3">
          <LuSquareCheckBig />
          My Tasks{" "}
          <span className="bg-gray-400/30 px-2.5 py-1 rounded-full text-sm font-semibold">
            0
          </span>
        </h4>
        {/* {isOpen ? (
            <ChevronUp
              className={`text-gray-500 inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          ) : (
            <ChevronDown className="text-gray-500 inline-block" />
          )} */}
        {isOpen ? (
          <ChevronUp className="text-gray-500 dark:text-gray-400 inline-block opacity-100 scale-100" />
        ) : (
          <ChevronDown className="text-gray-500 dark:text-gray-400 inline-block opacity-100 scale-100" />
        )}
      </button>
      {/* Users Projects */}
      <button className="flex items-center justify-between py-4 px-2 hover:bg-gray-200 hover:text-slate-900 rounded-md font-semibold">
        <h4 className="flex items-center justify-between">My Projects </h4>
        <span className="inline-block">
          <FaArrowRight className="text-gray-500" />
        </span>
      </button>
    </nav>
  );
}
