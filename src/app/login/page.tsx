"use client"

import Link from "next/link"

import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react"

export default function LoginPage() {

  return (

    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-zinc-100 dark:bg-zinc-950">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white">

        <div>

          <h1 className="text-5xl font-bold">
            Globopersona
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-md leading-relaxed">
            AI-powered email outreach platform designed for modern businesses and startups.
          </p>

        </div>

        <div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <p className="text-xl font-semibold leading-relaxed">
              “Globopersona completely transformed our outreach workflow and boosted conversions.”
            </p>

            <div className="mt-6">

              <h3 className="font-bold">
                Sarah Johnson
              </h3>

              <span className="text-white/70 text-sm">
                Growth Labs
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 lg:p-12">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Welcome Back
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 mt-3">
              Sign in to continue to your dashboard
            </p>

          </div>

          <div className="space-y-5">

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
                  placeholder="Enter your password"
                  className="bg-transparent outline-none w-full text-zinc-900 dark:text-white"
                />

              </div>

            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">

              Sign In

              <ArrowRight size={18} />

            </button>

          </div>

          {/* FOOTER */}
          <p className="text-center text-zinc-500 dark:text-zinc-400 mt-8">

            Don’t have an account?{" "}

            <Link
              href="/signup"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>

  )

}