"use client";

import { DashbaordIcon } from "@/lib/icons/DashbaordIcon";
import { AddPostIcon } from "@/lib/icons/AddPostIcon";
import { LogoutIcon } from "@/lib/icons/LogoutIcon";
import { MyLink } from "./common/MyLink";
import { UserName } from "./UserName";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils/utils";

export function MobileProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium",
          "bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600",
        )}
      >
        <UserName />
        <svg
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </button>

      {isOpen && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute right-0 mt-2 w-40 rounded-md shadow-lg",
            "bg-white dark:bg-gray-800 dark:shadow-gray-700",
          )}
        >
          <nav className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            <MyLink
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <DashbaordIcon />
              Dashboard
            </MyLink>
            <MyLink
              href="/add-post"
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <AddPostIcon />
              Add Post
            </MyLink>
            <MyLink
              href="/api/auth/logout"
              className="flex items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white"
            >
              <LogoutIcon />
              Logout
            </MyLink>
          </nav>
        </motion.section>
      )}
    </main>
  );
}
