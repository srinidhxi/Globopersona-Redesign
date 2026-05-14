"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import {
  User,
  Bell,
  CreditCard,
  Moon,
  Save,
} from "lucide-react"

import Sidebar from "@/components/ui/layout/sidebar"

export default function SettingsPage() {

  const [notifications, setNotifications] = useState(true)

const { theme, setTheme } = useTheme()

  const [saved, setSaved] = useState(false)

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-950 p-8 transition-all duration-300">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
            Settings
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
            Manage your account and application preferences
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <div className="xl:col-span-2 space-y-8">

            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

              <div className="flex items-center gap-3 mb-8">

                <User
                  className="text-blue-500"
                  size={24}
                />

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Profile Information
                </h2>

              </div>

              <div className="space-y-6">

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Full Name
                  </label>

                  <input
                    defaultValue="Sri Nidhi"
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 rounded-2xl px-5 py-4 outline-none text-zinc-900 dark:text-white"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>

                  <input
                    defaultValue="srinidhi@globopersona.ai"
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 rounded-2xl px-5 py-4 outline-none text-zinc-900 dark:text-white"
                  />

                </div>

              </div>

            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

              <div className="flex items-center gap-3 mb-8">

                <Bell
                  className="text-purple-500"
                  size={24}
                />

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Notifications
                </h2>

              </div>

              <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-5">

                <div>

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Email Notifications
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Receive campaign and analytics updates
                  </p>

                </div>

                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-16 h-9 rounded-full transition-all duration-300 shadow-inner ${
                    notifications
                      ? "bg-blue-500"
                      : "bg-zinc-400"
                  }`}
                >

                  <div
                    className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${ 
                      notifications
                        ? "translate-x-8"
                        : "translate-x-1"
                    }`}
                  />

                </button>

              </div>

            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

              <div className="flex items-center gap-3 mb-8">

                <Moon
                  className="text-yellow-500"
                  size={24}
                />

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Appearance
                </h2>

              </div>

              <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-5">

                <div>

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Dark Mode
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Toggle dark interface mode
                  </p>

                </div>

               <button
  onClick={() =>
    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    )
  }
className={`relative w-16 h-9 rounded-full transition-all duration-300 shadow-inner ${
    theme === "dark"
      ? "bg-blue-500"
      : "bg-zinc-400"
  }`}
>

  <div
className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
      theme === "dark"
        ? "translate-x-8"
        : "translate-x-1"
    }`}
  />

</button>

              </div>

            </div>

          </div>

          <div className="space-y-8">

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl">

              <div className="flex items-center gap-3 mb-6">

                <CreditCard size={28} />

                <h2 className="text-2xl font-bold">
                  Billing Plan
                </h2>

              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">

                <p className="text-blue-100">
                  Current Plan
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  Pro
                </h3>

                <p className="mt-3 text-blue-100">
                  Unlimited AI email campaigns and analytics
                </p>

              </div>

             <button
  onClick={() => alert("Upgrade flow coming soon 🚀")}
  className="
  w-full
  mt-6
  bg-white/10
  backdrop-blur-xl
  text-white
  py-4
  rounded-2xl
  font-semibold
  border
  border-white/20
  hover:bg-white/20
  hover:scale-[1.02]
  active:scale-[0.98]
  transition-all
  duration-300
  shadow-xl
  "
>
  Upgrade Plan
</button>

            </div>

            <button
  onClick={() => {

    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2500)

  }}
  className="
  w-full
  bg-gradient-to-r
  from-blue-500
  to-purple-600
  text-white
  py-5
  rounded-2xl
  font-semibold
  shadow-2xl
  hover:shadow-blue-500/30
  hover:scale-[1.02]
  active:scale-[0.98]
  transition-all
  duration-300
  flex
  items-center
  justify-center
  gap-3
  border
  border-white/10
  backdrop-blur-xl
  "
>

  <Save size={20} />

  Save Changes

</button>

            {saved && (

              <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-4 text-green-700 dark:text-green-300 text-center">

                ✅ Settings saved successfully

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  )
}