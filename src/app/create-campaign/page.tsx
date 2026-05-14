"use client"

import { useState } from "react"

import {
  Sparkles,
  Mail,
  Users,
  WandSparkles,
} from "lucide-react"

import Sidebar from "@/components/ui/layout/sidebar"

export default function CreateCampaignPage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const [generatedEmail, setGeneratedEmail] = useState("")
  const [campaignLaunched, setCampaignLaunched] = useState(false)

const [draftSaved, setDraftSaved] = useState(false)

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-950 p-8 transition-all duration-300">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
            Create Campaign
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
            Build AI-powered personalized email campaigns
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <div className="xl:col-span-2 space-y-8">

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">

                  <Mail size={24} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Campaign Details
                  </h2>

                  <p className="text-zinc-500 dark:text-zinc-400">
                    Configure your outreach campaign
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Campaign Name
                  </label>

                  <input
                    placeholder="AI Outreach Campaign"
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-blue-500 transition-all"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Target Audience
                  </label>

                  <input
                    placeholder="Startup founders, SaaS companies..."
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-blue-500 transition-all"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    AI Instructions
                  </label>

                  <textarea
                    placeholder="Generate personalized cold outreach emails..."
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none border border-transparent focus:border-blue-500 transition-all h-40 resize-none"
                  />

                </div>

              </div>

            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">

                  <Users size={24} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Audience Settings
                  </h2>

                  <p className="text-zinc-500 dark:text-zinc-400">
                    Define lead segmentation
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Industry
                  </label>

                  <input
                    placeholder="Technology"
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Company Size
                  </label>

                  <input
                    placeholder="10-50 employees"
                    className="w-full mt-2 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

              </div>

            </div>

          </div>

          <div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl sticky top-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">

                  <Sparkles size={24} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    AI Assistant
                  </h2>

                  <p className="text-blue-100">
                    Smart personalization engine
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">

                  <div className="flex items-center gap-2 mb-2">

                    <WandSparkles size={18} />

                    <span className="font-semibold">
                      AI Suggestions
                    </span>

                  </div>

                  <p className="text-sm text-blue-100 leading-relaxed">
                    Use concise subject lines and personalize openings with company-specific pain points.
                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">

                  <div className="flex items-center gap-2 mb-2">

                    <Sparkles size={18} />

                    <span className="font-semibold">
                      Optimization Score
                    </span>

                  </div>

                  <h3 className="text-5xl font-bold mt-4">
                    92%
                  </h3>

                </div>

              </div>

              <button
                onClick={() => {

                  setIsGenerating(true)

                  setTimeout(() => {

                    setGeneratedEmail(
`Hey Sarah,

I noticed your company is scaling rapidly in the SaaS space. Many growing startups struggle with converting outbound leads consistently.

Globopersona helps automate personalized AI-powered outreach campaigns that improve engagement and response rates significantly.

Would you be open to a quick 15-minute conversation next week?

Best,
W`
                    )

                    setIsGenerating(false)

                  }, 2000)

                }}
                className="w-full mt-8 bg-white text-zinc-900 py-4 rounded-2xl font-semibold hover:bg-zinc-100 transition-all"
              >

                {isGenerating
                  ? "Generating..."
                  : "Generate AI Emails"}

              </button>

              {generatedEmail && (

                <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-5">

                  <h3 className="font-semibold mb-3">
                    Generated Email
                  </h3>

                  <p className="text-sm leading-relaxed whitespace-pre-line text-blue-100">
                    {generatedEmail}
                  </p>

                </div>

              )}
              <div className="mt-6 flex gap-4">

  <button
    onClick={() => {
      setDraftSaved(true)

      setTimeout(() => {
        setDraftSaved(false)
      }, 2500)
    }}
    className="flex-1 bg-white/10 border border-white/20 text-white py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all"
  >
    Save Draft
  </button>

  <button
    onClick={() => {
      setCampaignLaunched(true)

      setTimeout(() => {
        setCampaignLaunched(false)
      }, 3000)
    }}
    className="flex-1 bg-white text-zinc-900 py-4 rounded-2xl font-semibold hover:bg-zinc-100 transition-all"
  >
    Launch Campaign
  </button>

</div>

{draftSaved && (

  <div className="mt-4 bg-blue-500/20 border border-blue-400/30 rounded-2xl p-4 text-white">

    ✅ Draft saved successfully

  </div>

)}

{campaignLaunched && (

  <div className="mt-4 bg-green-500/20 border border-green-400/30 rounded-2xl p-4 text-white">

    🚀 Campaign launched successfully

  </div>

)}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}