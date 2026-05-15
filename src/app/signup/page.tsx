"use client"

import Link from "next/link"

import {
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react"

export default function SignupPage() {

  return (

    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-zinc-100 dark:bg-zinc-950">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-purple-600 to-blue-700 text-white">

        <div>

          <h1 className="text-5xl font-bold">
            Join Globopersona
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-md leading-relaxed">
            Build AI-powered campaigns, automate outreach, and grow faster with smarter email workflows.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <p className="text-xl font-semibold leading-relaxed">
            “The easiest way to scale personalized outreach with AI.”
          </p>

          <div className="mt-6">

            <h3 className="font-bold">
              Michael Chen
            </h3>

            <span className="text-white/70 text-sm">
              Nova AI
            </span>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 lg:p-12">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Create Account
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-3">
              Start your AI outreach journey today
            </p>

          </div>

          <div className="space-y-5">

            {/* NAME */}
            <div>

              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                Full Name
              </label>

              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4">

                <User
                  size={18}
                  className="text-zinc-400"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-transparent outline-none w-full text-zinc-900 dark:text-white"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                Email Address
              </label>

              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4">

                <Mail
                  size={18}
                  className="text-zinc-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none w-full text-zinc-900 dark:text-white"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 block">
                Password
              </label>

              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-4">

                <Lock
                  size={18}
                  className="text-zinc-400"
                />

                <input
                  type="password"
                  placeholder="Create password"
                  className="bg-transparent outline-none w-full text-zinc-900 dark:text-white"
                />

              </div>

            </div>

            {/* BUTTON */}
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">

              Create Account

              <ArrowRight size={18} />

            </button>

          </div>

          {/* FOOTER */}
          <p className="text-center text-zinc-500 dark:text-zinc-400 mt-8">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>

  )

}