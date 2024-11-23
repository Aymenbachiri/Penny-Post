import { DashbaordIcon } from "@/lib/icons/DashbaordIcon";
import { MyLink } from "./common/MyLink";
import { UserName } from "./UserName";
import { AddPostIcon } from "@/lib/icons/AddPostIcon";
import { LogoutIcon } from "@/lib/icons/LogoutIcon";

export function ProfileMenu() {
  return (
    <main className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
        >
          <UserName />
          {/* <!-- Dropdown arrow --> */}
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
          </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <section className="invisible absolute left-0 -mt-1 w-40 origin-top-left divide-y divide-gray-100 rounded-md bg-white opacity-0 shadow-lg transition duration-300 group-hover:visible group-hover:opacity-100">
          <nav className="py-1">
            <MyLink
              href="/dashboard"
              className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <DashbaordIcon />
              Dashboard
            </MyLink>
            <MyLink
              href="/add-post"
              className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <AddPostIcon />
              Add Post
            </MyLink>
            <MyLink
              href="/api/auth/logout"
              className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-gray-700 text-red-700 hover:bg-gray-100"
            >
              <LogoutIcon />
              Logout
            </MyLink>
          </nav>
        </section>
      </div>
    </main>
  );
}
