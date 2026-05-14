"use client"

import { useState } from "react"

import {
  Mail,
  TrendingUp,
  Users,
  Sparkles,
  Activity,
  Globe,
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

const topCampaigns = [
  {
    name: "AI Outreach Campaign",
    rate: "42%",
  },
  {
    name: "Black Friday Blast",
    rate: "67%",
  },
  {
    name: "Startup Lead Funnel",
    rate: "31%",
  },
]

const activities = [
  "Campaign launched successfully",
  "24 new contacts added",
  "AI generated 120 personalized emails",
  "Export report downloaded",
]

export default function AnalyticsPage() {

  const [showExportModal, setShowExportModal] = useState(false)

  const [exportSuccess, setExportSuccess] = useState(false)

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-950 p-8 transition-all duration-300">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
              Analytics
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
              Monitor engagement and campaign performance
            </p>

          </div>

          <button
            onClick={() => setShowExportModal(true)}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg font-semibold"
          >
            Export Report
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl text-white shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-blue-100">
                  Total Opens
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  84.2K
                </h2>

              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                <Mail size={28} />
              </div>

            </div>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Engagement Rate
                </p>

                <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
                  42%
                </h2>

              </div>

              <div className="bg-green-100 p-4 rounded-2xl">

                <TrendingUp
                  className="text-green-600"
                  size={28}
                />

              </div>

            </div>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Subscribers
                </p>

                <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
                  12.8K
                </h2>

              </div>

              <div className="bg-purple-100 p-4 rounded-2xl">

                <Users
                  className="text-purple-600"
                  size={28}
                />

              </div>

            </div>

          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  AI Optimizations
                </p>

                <h2 className="text-4xl font-bold mt-4 text-zinc-900 dark:text-white">
                  324
                </h2>

              </div>

              <div className="bg-yellow-100 p-4 rounded-2xl">

                <Sparkles
                  className="text-yellow-600"
                  size={28}
                />

              </div>

            </div>

          </div>

        </div>

        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Engagement Analytics
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Weekly email engagement trends
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          <div className="xl:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <Activity
                className="text-blue-500"
                size={24}
              />

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Top Performing Campaigns
              </h2>

            </div>

            <div className="space-y-4">

              {topCampaigns.map((campaign) => (

                <div
                  key={campaign.name}
                  className="flex items-center justify-between p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                >

                  <div>

                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {campaign.name}
                    </h3>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      High performing campaign
                    </p>

                  </div>

                  <div className="text-2xl font-bold text-blue-600">
                    {campaign.rate}
                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <Globe
                className="text-green-500"
                size={24}
              />

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Audience Insights
              </h2>

            </div>

            <div className="space-y-5">

              <div>

                <div className="flex items-center justify-between mb-2">

                  <span className="text-zinc-700 dark:text-zinc-300">
                    United States
                  </span>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    42%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">

                  <div className="w-[42%] h-full bg-blue-500 rounded-full" />

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-2">

                  <span className="text-zinc-700 dark:text-zinc-300">
                    India
                  </span>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    28%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">

                  <div className="w-[28%] h-full bg-purple-500 rounded-full" />

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-2">

                  <span className="text-zinc-700 dark:text-zinc-300">
                    United Kingdom
                  </span>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    13%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">

                  <div className="w-[13%] h-full bg-green-500 rounded-full" />

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <Activity
              className="text-purple-500"
              size={24}
            />

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Recent Activity
            </h2>

          </div>

          <div className="space-y-4">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              >

                <div className="w-3 h-3 rounded-full bg-blue-500" />

                <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                  {activity}
                </p>

              </div>

            ))}

          </div>

        </div>

        {showExportModal && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl">

              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                Export Analytics
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                Choose a format to export your analytics report.
              </p>

              <div className="space-y-4">

                <button
                  onClick={() => {

                    setExportSuccess(true)

                    setTimeout(() => {
                      setExportSuccess(false)
                      setShowExportModal(false)
                    }, 2500)

                  }}
                  className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded-2xl p-5 text-left"
                >

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    PDF Report
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Best for presentations and sharing
                  </p>

                </button>

                <button
                  onClick={() => {

                    setExportSuccess(true)

                    setTimeout(() => {
                      setExportSuccess(false)
                      setShowExportModal(false)
                    }, 2500)

                  }}
                  className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded-2xl p-5 text-left"
                >

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    CSV Export
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Open in Excel or Google Sheets
                  </p>

                </button>

                <button
                  onClick={() => {

                    setExportSuccess(true)

                    setTimeout(() => {
                      setExportSuccess(false)
                      setShowExportModal(false)
                    }, 2500)

                  }}
                  className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded-2xl p-5 text-left"
                >

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Excel File
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Detailed spreadsheet analytics
                  </p>

                </button>

              </div>

              <button
                onClick={() => setShowExportModal(false)}
                className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-semibold"
              >
                Cancel
              </button>

              {exportSuccess && (

                <div className="mt-6 bg-green-500/20 border border-green-400/30 rounded-2xl p-4 text-green-700 dark:text-green-300">

                  ✅ Report exported successfully

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </div>

  )
}