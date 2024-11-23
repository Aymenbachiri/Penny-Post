"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MyLink } from "./common/MyLink";
import { useNavbar } from "@/lib/hooks/useNavbar";
import ThemeSwitch from "./ThemeSwitch";
import { MenuIcon } from "@/lib/icons/MenuIcon";
import { CloseIcon } from "@/lib/icons/CloseIcon";
import { MyImage } from "./common/MyImage";
import { cn } from "@/lib/utils/utils";
import { ProfileMenu } from "./ProfileMenu";
import { useUser } from "@auth0/nextjs-auth0/client";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
];

export function Navbar() {
  const { isOpen, setIsOpen, scrolled, pathname, shadow } = useNavbar();
  const { user } = useUser();

  return (
    <header className="z-50" style={{ zIndex: 100 }}>
      <motion.nav
        initial={false}
        animate={
          scrolled
            ? {
                backgroundColor: "var(--background)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }
            : {
                backgroundColor: "transparent",
                boxShadow: "none",
              }
        }
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed z-50 w-full px-6 py-4 transition duration-200",
          scrolled && "shadow-md",
          scrolled && "bg-white dark:bg-black",
          scrolled && "dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)]",
          shadow &&
            "fixed start-0 top-0 z-[100] w-full shadow-xl backdrop-blur-md duration-300 ease-in-out dark:shadow-[#dedbdb] dark:duration-300 dark:ease-in-out",
        )}
        style={{ zIndex: 100 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <motion.section
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MyLink href="/" className="text-xl font-bold" passHref>
                <MyImage
                  src="/assets/images/logo.webp"
                  alt="logo"
                  width={60}
                  height={60}
                  sizes="100vw"
                  className="h-10 w-10 rounded-md md:h-14 md:w-14 md:rounded-2xl"
                />
              </MyLink>
            </motion.section>
            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MyLink
                    href={item.path}
                    className={`relative ${
                      pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-600 dark:text-white"
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 top-full h-0.5 w-full bg-blue-600"
                      />
                    )}
                  </MyLink>
                </motion.div>
              ))}
            </nav>
            <section className="hidden items-center justify-center gap-3 md:flex">
              <ThemeSwitch />
              {user && <ProfileMenu />}
            </section>
            <div className="flex items-center justify-center gap-3">
              <section className="flex md:hidden">
                <ThemeSwitch />
              </section>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </motion.button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 md:hidden"
              >
                <nav className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MyLink
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block hover:bg-gray-400 hover:text-white dark:hover:bg-gray-900 ${
                          pathname === item.path
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {item.name}
                      </MyLink>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}
