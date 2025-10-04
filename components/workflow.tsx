"use client"
import React, { useState, useEffect } from 'react';
import { UserPlus, LogIn, Upload, Eye, Bot, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const workflowSteps = [
    {
      icon: UserPlus,
      title: "Framework Selection & Baseline Assessment",
      description: "Choose ISO 27001, SOC 2, GDPR, EU AI Act (and more). packets analyzes your current posture and creates an actionable plan.",
      color: "from-teal-400 to-teal-600",
      glowColor: "shadow-teal-500/50",
      details: "AI analyzes existing policies, controls, and evidence"
    },
    {
      icon: LogIn,
      title: "Control Mapping & Gap Detection",
      description: "Auto‑map existing controls across frameworks. AI flags gaps, prioritizes actions, and assigns owners.",
      color: "from-cyan-400 to-cyan-600",
      glowColor: "shadow-cyan-500/50",
      details: "AI cross-maps controls and highlights gaps"
    },
    {
      icon: Upload,
      title: "Evidence Collection & Assignments",
      description: "Automate requests, reminders, and collection from systems and people. Maintain versioned, tamper‑evident trails.",
      color: "from-blue-400 to-blue-600",
      glowColor: "shadow-blue-500/50",
      details: "Automated requests and reminders via email"
    },
    {
      icon: Eye,
      title: "Risk & Vendor Management",
      description: "Centralize risks, third‑party vendors, and their attack surfaces. Run questionnaires and automate follow‑ups.",
      color: "from-indigo-400 to-indigo-600",
      glowColor: "shadow-indigo-500/50",
      details: "Centralized risk and vendor management"
    },
    {
      icon: Bot,
      title: "Mock Assessments & Auditor Collaboration",
      description: "Run unlimited dry‑runs, scope access for auditors, and share only what’s needed—securely.",
      color: "from-purple-400 to-purple-600",
      glowColor: "shadow-purple-500/50",
      details: "Unlimited dry-runs and secure auditor access"
    },
    {
      icon: CheckCircle,
      title: "Continuous Monitoring & Trust Center",
      description: "Track control health in real time and publish a buyer‑friendly Trust Center to close deals faster.",
      color: "from-emerald-400 to-emerald-600",
      glowColor: "shadow-emerald-500/50",
      details: "Real-time control health tracking and Trust Center publication"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % workflowSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, workflowSteps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const resetDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
    setIsAutoPlaying(true);
  };

  return (
    <section id="workflow" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-teal-400" />
            <span className="text-teal-400 font-medium">Next-Gen Compliance Automation</span>
          </div>
          
          <h3 className="text-5xl md:text-5xl font-atak bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent mb-8">
            Compliance  Done Right - Start to Finish
          </h3>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Experience the future of compliance automation with AI‑powered intelligence. 
            Here’s what a typical compliance program looks like—from baseline to certification.
          </p>

        </div>

        {/* Interactive Workflow Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 opacity-30"></div>
          
          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              const isCompleted = completedSteps.includes(index);
              
              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Glow Effect */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-10 rounded-3xl blur-xl scale-110`}></div>
                  )}
                  
                  <div className={`relative flex items-center space-x-8 p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-2 border-teal-500/50 shadow-2xl' 
                      : 'bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60'
                  }`}>
                    
                    {/* Step Number & Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 transition-all duration-500 ${
                        isActive ? `shadow-2xl ${step.glowColor} animate-pulse` : 'shadow-lg'
                      }`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Step Number */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-emerald-500 text-white' 
                          : isActive 
                            ? 'bg-white text-gray-900' 
                            : 'bg-gray-600 text-gray-300'
                      }`}>
                        {isCompleted ? '✓' : index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-2xl font-atak mb-2 transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-gray-200'
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className={`text-1xl mb-3 transition-all duration-300 ${
                        isActive ? 'text-gray-200' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      
                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-teal-300 text-sm font-medium">
                          {step.details}
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex-shrink-0">
                      {isActive && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping delay-75"></div>
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping delay-150"></div>
                        </div>
                      )}
                      
                      {!isActive && (
                        <ArrowRight className={`h-6 w-6 transition-all duration-300 ${
                          isCompleted ? 'text-emerald-400' : 'text-gray-500 group-hover:text-teal-400'
                        }`} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 font-medium">Workflow Progress</span>
            <span className="text-teal-400 font-bold">
              {Math.round(((activeStep + 1) / workflowSteps.length) * 100)}%
            </span>
          </div>
          
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;
