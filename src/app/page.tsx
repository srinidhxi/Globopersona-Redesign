"use client"

import { useState } from "react"

import {
  Mail,
  TrendingUp,
  DollarSign,
  Sparkles,
  Bell,
  Search,
} from "lucide-react"

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts"

import Sidebar from "@/components/ui/layout/sidebar"

const chartData = [
  { name: "Mon", opens: 2400 },
  { name: "Tue", opens: 1398 },
  { name: "Wed", opens: 9800 },
  { name: "Thu", opens: 3908 },
  { name: "Fri", opens: 4800 },
  { name: "Sat", opens: 3800 },
  { name: "Sun", opens: 4300 },
]

const campaigns = [
  {
    name: "Summer Outreach",
    status: "Active",
    openRate: "42%",
    sent: "2,430",
  },
  {
    name: "AI Lead Generation",
    status: "Draft",
    openRate: "31%",
    sent: "1,120",
  },
  {
    name: "Black Friday Campaign",
    status: "Completed",
    openRate: "67%",
    sent: "8,540",
  },
]

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <div className="flex bg-zinc-100 dark:bg-zinc-950">

      <Sidebar />

      <div className="flex-1 min-h-screen p-6 lg:p-8 overflow-hidden">

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

          <div>

            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              Dashboard
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-base lg:text-lg">
              Monitor campaigns and AI email performance
            </p>

          </div>

          <div className="flex items-center gap-4 flex-wrap">

            {/* SEARCH */}
            <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 shadow-sm min-w-[250px]">

              <Search
                size={18}
                className="text-zinc-400 shrink-0"
              />

              <input
                placeholder="Search..."
                className="outline-none bg-transparent text-sm text-zinc-900 dark:text-white w-full"
              />

            </div>

            {/* NOTIFICATIONS */}
            <div className="relative">

              <button
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
                className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-zinc-900 dark:text-white"
              >

                <Bell size={20} />

              </button>

              {showNotifications && (

                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-5 z-50">

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                    Notifications
                  </h3>

                  <div className="space-y-4">

                    <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                      <p className="font-medium text-zinc-900 dark:text-white">
                        AI Campaign Completed
                      </p>

                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Black Friday campaign finished successfully.
                      </p>

                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                      <p className="font-medium text-zinc-900 dark:text-white">
                        24 New Leads Added
                      </p>

                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Your contacts list has grown today.
                      </p>

                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                      <p className="font-medium text-zinc-900 dark:text-white">
                        Open Rate Increased
                      </p>

                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Engagement improved by 12% this week.
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* PROFILE */}
            <div className="relative">

              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu)
                  setShowNotifications(false)
                }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg"
              >
                S
              </button>

              {showProfileMenu && (

                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-3 z-50">

                  <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">

                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      Sri Nidhi
                    </h3>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      srinidhi@globopersona.ai
                    </p>

                  </div>

                  <div className="mt-2 space-y-1">

                    <button className="w-full text-left px-4 py-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300">
                      My Profile
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300">
                      Settings
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300">
                      Billing
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all text-red-600">
                      Logout
                    </button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mb-8">

          {/* CARD 1 */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl text-white shadow-lg min-w-0">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0">

                <p className="text-sm text-blue-100 whitespace-nowrap">
                  Total Campaigns
                </p>

                <h2 className="text-3xl xl:text-4xl font-bold mt-4 truncate">
                  48
                </h2>

              </div>

              <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                <Mail size={28} />
              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-w-0">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0">

                <p className="text-zinc-500 dark:text-zinc-400 text-sm whitespace-nowrap">
                  Open Rate
                </p>

                <h2 className="text-3xl xl:text-4xl font-bold mt-4 text-zinc-900 dark:text-white truncate">
                  28.4%
                </h2>

              </div>

              <div className="bg-green-100 p-4 rounded-2xl shrink-0">

                <TrendingUp
                  className="text-green-600"
                  size={28}
                />

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-w-0">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0">

                <p className="text-zinc-500 dark:text-zinc-400 text-sm whitespace-nowrap">
                  AI Emails Sent
                </p>

                <h2 className="text-3xl xl:text-4xl font-bold mt-4 text-zinc-900 dark:text-white truncate">
                  12.8K
                </h2>

              </div>

              <div className="bg-purple-100 p-4 rounded-2xl shrink-0">

                <Sparkles
                  className="text-purple-600"
                  size={28}
                />

              </div>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-w-0 overflow-hidden">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0 flex-1">

                <p className="text-zinc-500 dark:text-zinc-400 text-sm whitespace-nowrap">
                  Revenue Generated
                </p>

                <h2 className="text-3xl xl:text-4xl font-bold mt-4 text-zinc-900 dark:text-white truncate">
                  $24,847
                </h2>

              </div>

              <div className="bg-yellow-100 p-4 rounded-2xl shrink-0 flex items-center justify-center">

                <DollarSign
                  className="text-yellow-600"
                  size={28}
                />

              </div>

            </div>

          </div>

        </div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

          {/* CHART */}
          <div className="xl:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Campaign Performance
                </h2>

                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  Weekly email open analytics
                </p>

              </div>

              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-sm text-zinc-600 dark:text-zinc-300">
                Last 7 Days
              </div>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={chartData}>

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#71717a" }}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="opens"
                    stroke="#2563eb"
                    strokeWidth={4}
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <p className="font-semibold text-zinc-900 dark:text-white">
                  Emma opened campaign
                </p>
                <span className="text-sm text-zinc-500">
                  2 minutes ago
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <p className="font-semibold text-zinc-900 dark:text-white">
                  New lead added
                </p>
                <span className="text-sm text-zinc-500">
                  15 minutes ago
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <p className="font-semibold text-zinc-900 dark:text-white">
                  Campaign completed
                </p>
                <span className="text-sm text-zinc-500">
                  1 hour ago
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* RECENT CAMPAIGNS */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-x-auto">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Recent Campaigns
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                Latest AI email campaign performance
              </p>

            </div>

          </div>

          <table className="w-full min-w-[600px]">

            <thead>

              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-left text-zinc-500 text-sm">

                <th className="pb-4">Campaign</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Open Rate</th>
                <th className="pb-4">Emails Sent</th>

              </tr>

            </thead>

            <tbody>

              {campaigns.map((campaign, index) => (

                <tr
                  key={index}
                  className="border-b border-zinc-100 dark:border-zinc-800"
                >

                  <td className="py-5 font-semibold text-zinc-900 dark:text-white">
                    {campaign.name}
                  </td>

                  <td className="py-5">

                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800">
                      {campaign.status}
                    </span>

                  </td>

                  <td className="py-5 text-zinc-700 dark:text-zinc-300">
                    {campaign.openRate}
                  </td>

                  <td className="py-5 text-zinc-700 dark:text-zinc-300">
                    {campaign.sent}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}