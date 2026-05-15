"use client"

import { useState } from "react"

import {
  Sparkles,
  Send,
  Calendar,
  Users,
} from "lucide-react"

import Sidebar from "@/components/ui/layout/sidebar"

export default function CreateCampaignPage() {

  const [campaignName, setCampaignName] = useState("")
  const [subject, setSubject] = useState("")
  const [audience, setAudience] = useState("")
  const [emailContent, setEmailContent] = useState("")

  const generateAIEmail = () => {

    setEmailContent(
`Hey there 👋

We’re excited to introduce our latest AI-powered platform designed to help businesses automate outreach and improve engagement.

With smarter campaigns and personalized emails, you can save hours while increasing conversions.

Let us know if you'd like a quick demo 🚀`
    )
  }

  return (

    <div className="flex bg-zinc-100 dark:bg-zinc-950">

      <Sidebar />

      <div className="flex-1 min-h-screen p-6 lg:p-8">

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

          <div>

            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              Create Campaign
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-lg">
              Generate and schedule AI email campaigns
            </p>

          </div>

          <button
            onClick={generateAIEmail}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 w-fit"
          >

            <Sparkles size={20} />

            Generate AI Email

          </button>

        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">

            <div className="space-y-6">

              {/* CAMPAIGN NAME */}
              <div>

                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                  Campaign Name
                </label>

                <input
                  value={campaignName}
                  onChange={(e) =>
                    setCampaignName(e.target.value)
                  }
                  placeholder="Enter campaign name..."
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4 outline-none text-zinc-900 dark:text-white"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                  Email Subject
                </label>

                <input
                  value={subject}
                  onChange={(e) =>
                    setSubject(e.target.value)
                  }
                  placeholder="Enter email subject..."
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4 outline-none text-zinc-900 dark:text-white"
                />

              </div>

              {/* AUDIENCE */}
              <div>

                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                  Target Audience
                </label>

                <input
                  value={audience}
                  onChange={(e) =>
                    setAudience(e.target.value)
                  }
                  placeholder="Startup founders, marketers..."
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4 outline-none text-zinc-900 dark:text-white"
                />

              </div>

              {/* EMAIL CONTENT */}
              <div>

                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                  Email Content
                </label>

                <textarea
                  value={emailContent}
                  onChange={(e) =>
                    setEmailContent(e.target.value)
                  }
                  placeholder="Write your AI email..."
                  rows={12}
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4 outline-none resize-none text-zinc-900 dark:text-white"
                />

              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* CAMPAIGN STATS */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Campaign Info
              </h2>

              <div className="space-y-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3 text-zinc-500">

                    <Users size={18} />

                    Audience

                  </div>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    12.8K
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3 text-zinc-500">

                    <Calendar size={18} />

                    Schedule

                  </div>

                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Tomorrow
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3 text-zinc-500">

                    <Send size={18} />

                    Status

                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Draft
                  </span>

                </div>

              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm space-y-4">

              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300">

                Save Campaign

              </button>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300">

                Send Test Email

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}