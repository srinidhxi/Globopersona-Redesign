"use client"

import {
  Mail,
  TrendingUp,
  Sparkles,
  BellRing,
  Activity,
} from "lucide-react"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts"

import Sidebar from "@/components/ui/layout/sidebar"

const chartData = [
  { day: "Mon", value: 2400 },
  { day: "Tue", value: 1800 },
  { day: "Wed", value: 5200 },
  { day: "Thu", value: 3100 },
  { day: "Fri", value: 3900 },
  { day: "Sat", value: 2800 },
  { day: "Sun", value: 3500 },
]

export default function CampaignsPage() {

  return (

    <div className="flex bg-zinc-100 dark:bg-zinc-950">

      <Sidebar />

      <div className="flex-1 min-h-screen p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

          <div>

            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              Campaigns
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-lg">
              Manage and monitor email campaigns
            </p>

          </div>

          <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-2xl shadow-lg font-medium hover:scale-105 transition-all duration-300 w-fit">
            Create Campaign
          </button>

        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

          {/* CARD 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Mail className="text-white" size={26} />
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                Active
              </span>

            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              AI Outreach Campaign
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <Sparkles size={16} />
                  AI Emails
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  2,430
                </span>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <TrendingUp size={16} />
                  Open Rate
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  42%
                </span>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Mail className="text-white" size={26} />
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                Draft
              </span>

            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Startup Lead Funnel
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <Sparkles size={16} />
                  AI Emails
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  1,120
                </span>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <TrendingUp size={16} />
                  Open Rate
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  31%
                </span>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Mail className="text-white" size={26} />
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Completed
              </span>

            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Black Friday Blast
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <Sparkles size={16} />
                  AI Emails
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  8,540
                </span>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">
                  <TrendingUp size={16} />
                  Open Rate
                </div>

                <span className="font-semibold text-zinc-900 dark:text-white">
                  67%
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <p className="text-zinc-500">
              Total Replies
            </p>

            <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
              851
            </h2>

          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <p className="text-zinc-500">
              Conversion Rate
            </p>

            <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
              18%
            </h2>

          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <p className="text-zinc-500">
              Bounce Rate
            </p>

            <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
              4.2%
            </h2>

          </div>

        </div>

        {/* MAIN ANALYTICS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

          {/* CHART */}
          <div className="xl:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  Campaign Performance
                </h2>

                <p className="text-zinc-500 mt-2">
                  Monitor AI outreach analytics
                </p>

              </div>

              <button className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-sm">
                Last 7 Days
              </button>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={chartData}>

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={4}
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                <div className="flex items-center gap-3 mb-2">

                  <BellRing
                    className="text-blue-500"
                    size={18}
                  />

                  <p className="font-semibold text-zinc-900 dark:text-white">
                    Campaign launched
                  </p>

                </div>

                <span className="text-sm text-zinc-500">
                  2 minutes ago
                </span>

              </div>

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                <div className="flex items-center gap-3 mb-2">

                  <Activity
                    className="text-green-500"
                    size={18}
                  />

                  <p className="font-semibold text-zinc-900 dark:text-white">
                    Leads imported
                  </p>

                </div>

                <span className="text-sm text-zinc-500">
                  15 minutes ago
                </span>

              </div>

              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                <div className="flex items-center gap-3 mb-2">

                  <Sparkles
                    className="text-purple-500"
                    size={18}
                  />

                  <p className="font-semibold text-zinc-900 dark:text-white">
                    AI generated emails
                  </p>

                </div>

                <span className="text-sm text-zinc-500">
                  1 hour ago
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">

          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Recent Campaign Activity
              </h2>

              <p className="text-zinc-500 mt-1">
                Monitor AI outreach performance
              </p>

            </div>

            <button className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-sm">
              Last 7 Days
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead className="bg-zinc-50 dark:bg-zinc-950">

                <tr className="text-left text-zinc-500 text-sm">

                  <th className="px-6 py-4 font-medium">
                    Campaign
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Emails Sent
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Open Rate
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Replies
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t border-zinc-100 dark:border-zinc-800">

                  <td className="px-6 py-5 font-semibold">
                    AI Outreach Campaign
                  </td>

                  <td className="px-6 py-5">
                    2,430
                  </td>

                  <td className="px-6 py-5">
                    42%
                  </td>

                  <td className="px-6 py-5">
                    184
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Running
                    </span>

                  </td>

                </tr>

                <tr className="border-t border-zinc-100 dark:border-zinc-800">

                  <td className="px-6 py-5 font-semibold">
                    Startup Lead Funnel
                  </td>

                  <td className="px-6 py-5">
                    1,120
                  </td>

                  <td className="px-6 py-5">
                    31%
                  </td>

                  <td className="px-6 py-5">
                    74
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Draft
                    </span>

                  </td>

                </tr>

                <tr className="border-t border-zinc-100 dark:border-zinc-800">

                  <td className="px-6 py-5 font-semibold">
                    Black Friday Blast
                  </td>

                  <td className="px-6 py-5">
                    8,540
                  </td>

                  <td className="px-6 py-5">
                    67%
                  </td>

                  <td className="px-6 py-5">
                    593
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Completed
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  )

}