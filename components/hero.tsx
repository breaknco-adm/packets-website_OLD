"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion";

import { useState, useEffect } from "react"

// const rotatingItems = ["Global Capability Centers", "AI First Companies", "Solopreneurs & Lean Teams"]

export default function Hero() {

  return (
    <section className="pt-24 pb-16 gradient-bg relative overflow-hidden">
      {/* Creative Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/40 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200/50 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-violet-200/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-blue-300/30 rounded-lg rotate-12 animate-bounce delay-500"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationDuration: "3s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Documents Animation */}
        <div className="absolute top-32 right-10 animate-float">
          <div className="w-16 h-20 bg-white/80 rounded-lg shadow-lg border border-gray-200 transform rotate-12">
            <div className="p-2">
              <div className="h-2 bg-gray-300 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 rounded mb-1"></div>
              <div className="h-1 bg-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-16 animate-float-delayed">
          <div className="w-14 h-18 bg-white/80 rounded-lg shadow-lg border border-gray-200 transform -rotate-6">
            <div className="p-2">
              <div className="h-2 bg-purple-300 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 rounded mb-1"></div>
              <div className="h-1 bg-green-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 animate-float-slow">
          <div className="w-12 h-16 bg-white/80 rounded-lg shadow-lg border border-gray-200 transform rotate-3">
            <div className="p-1.5">
              <div className="h-1.5 bg-indigo-300 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 rounded mb-0.5"></div>
              <div className="h-1 bg-gray-200 rounded mb-0.5"></div>
              <div className="h-1 bg-orange-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Workflow Arrow Animation */}
        <div className="absolute top-1/3 left-1/4 animate-slide-right">
          <div className="flex items-center space-x-2 opacity-20">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
            <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>


        {/* Particle Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 my-10">
          {/* Left side - Text content */}
          <div className="flex-1 text-center">
            <h1 className="font-hero text-5xl md:text-6xl text-gradient-hero mb-10 leading-tight tracking-tight">
              Intelligent Compliance Workspace for <br />{" "}
              <span className="text-purple-300 font-hero transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {/* {rotatingItems[index]} */}
                Fast‑Growing Teams
              </span>
            </h1>

            <p className="font-atak text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium max-w-6xl mx-auto">
              <b>packets</b> is a smarter compliance automation platform that helps fast‑growing companies , 
              <b>GRC simple, automated, and continuous</b>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-pro text-gray-700 font-semibold">AI-guided workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-pro text-gray-700 font-semibold">Multi‑framework mapping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-pro text-gray-700 font-semibold">Faster audits</span>
              </div>
            </div>

            <Link href="/early-access">
              <div className="mt-8">
                <Button
                  size="lg"
                  className="px-10 py-5 font-pro font-bold text-lg rounded-xl border border-indigo-500 animate-pulse-glow bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes slide-right {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 3s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
