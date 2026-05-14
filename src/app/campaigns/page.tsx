"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import {
  Mail,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import Sidebar from "@/components/ui/layout/sidebar"

const campaigns = [
  {
    name: "AI Outreach Campaign",
    status: "Active",
    emails: "2,430",
    rate: "42%",
  },
  {
    name: "Startup Lead Funnel",
    status: "Draft",
    emails: "1,120",
    rate: "31%",
  },
  {
    name: "Black Friday Blast",
    status: "Completed",
    emails: "8,540",
    rate: "67%",
  },
]

export default function CampaignsPage() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-950 p-8 transition-all duration-300">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
              Campaigns
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
              Manage and monitor email campaigns
            </p>

          </div>

          <Link
            href="/create-campaign"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg inline-block w-fit"
          >
            Create Campaign
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {campaigns.map((campaign) => (

            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="flex items-start justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Mail size={24} />
                </div>

                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm">
                  {campaign.status}
                </span>

              </div>

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                {campaign.name}
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">

                    <Sparkles size={18} />

                    AI Emails

                  </div>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {campaign.emails}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">

                    <TrendingUp size={18} />

                    Open Rate

                  </div>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {campaign.rate}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-10 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-all duration-300">

          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Recent Campaign Activity
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                Monitor AI outreach performance
              </p>

            </div>

            <span className="px-4 py-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm">
              Last 7 Days
            </span>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-zinc-50 dark:bg-zinc-950">

                <tr className="text-left text-zinc-500 dark:text-zinc-400 text-sm">

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

                <tr className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">

                  <td className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">
                    AI Outreach Campaign
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    2,430
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    42%
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    184
                  </td>

                  <td className="px-6 py-5">

                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      Running
                    </span>

                  </td>

                </tr>

                <tr className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">

                  <td className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">
                    Startup Lead Funnel
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    1,120
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    31%
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    74
                  </td>

                  <td className="px-6 py-5">

                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                      Draft
                    </span>

                  </td>

                </tr>

                <tr className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">

                  <td className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">
                    Black Friday Blast
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    8,540
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    67%
                  </td>

                  <td className="px-6 py-5 text-zinc-700 dark:text-zinc-300">
                    593
                  </td>

                  <td className="px-6 py-5">

                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
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