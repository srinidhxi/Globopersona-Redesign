"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import {
  LayoutDashboard,
  Mail,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Campaigns",
    icon: Mail,
    path: "/campaigns",
  },
  {
    title: "Contacts",
    icon: Users,
    path: "/contacts",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
]

export default function Sidebar() {

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

const { theme, setTheme } = useTheme()
  return (
    <>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 left-5 z-50 lg:hidden bg-zinc-900 text-white p-3 rounded-2xl shadow-xl"
      >
        <Menu size={22} />
      </button>

      <div
className={`fixed lg:static top-0 left-0 min-h-screen w-64 bg-zinc-950 text-white px-5 py-8 border-r border-zinc-900 flex flex-col z-40 transition-all duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        <div>

          <div className="flex justify-end lg:hidden mb-6">

            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-all"
            >
              <X size={24} />
            </button>

          </div>

          <div className="mb-14">

            <div className="flex items-center gap-3 px-2">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg">
                G
              </div>

              <div>

                <h1 className="text-base font-semibold tracking-tight">
                  Globopersona
                </h1>

                <p className="text-xs text-zinc-500 mt-0.5">
                  AI Email Platform
                </p>

              </div>

            </div>

          </div>

          <div className="space-y-5 mt-10">

            {menuItems.map((item) => {

              const isActive = pathname === item.path

              return (
                <Link
                  href={item.path}
                  key={item.title}
                >

                  <div
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                      isActive
                        ? "bg-zinc-900 text-white border border-zinc-800"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/70"
                    }`}
                  >

                    <item.icon
                      size={19}
                      className="group-hover:scale-110 transition-all duration-300"
                    />

                    <span className="text-sm font-medium tracking-tight">
                      {item.title}
                    </span>

                  </div>

                </Link>
              )
            })}

          </div>

        </div>
<button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
>

  <span className="font-medium text-zinc-900 dark:text-white">
    Theme
  </span>

  {theme === "dark" ? (
    <Sun
      size={18}
      className="text-yellow-500"
    />
  ) : (
    <Moon
      size={18}
      className="text-blue-500"
    />
  )}

</button>
<div className="space-y-3 mt-10">

  <Link href="/login">

    <button className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white py-3 rounded-2xl font-medium hover:scale-[1.02] transition-all">

      Login

    </button>

  </Link>

  <Link href="/signup">

    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-2xl font-medium hover:scale-[1.02] transition-all">

      Sign Up

    </button>

  </Link>

</div>
        <div className="mt-auto pt-6">

          <div className="bg-zinc-900/60 rounded-2xl p-3 border border-zinc-800">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                W
              </div>

              <div>

                <h3 className="font-semibold text-sm text-white">
                  W
                </h3>

                <p className="text-xs text-zinc-500">
                  Pro Plan
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}