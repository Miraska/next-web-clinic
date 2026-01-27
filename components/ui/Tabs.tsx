"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: "pills" | "underline" | "boxed";
}

export default function Tabs({ tabs, defaultTab, variant = "pills" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  const getTabStyles = (isActive: boolean) => {
    const baseStyles = "relative px-4 py-2.5 font-medium text-sm transition-all duration-200 flex items-center gap-2";
    
    switch (variant) {
      case "pills":
        return `${baseStyles} rounded-full ${
          isActive
            ? "text-white"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`;
      case "underline":
        return `${baseStyles} border-b-2 ${
          isActive
            ? "text-blue-600 border-blue-600"
            : "text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300"
        }`;
      case "boxed":
        return `${baseStyles} rounded-lg ${
          isActive
            ? "bg-blue-50 text-blue-600 border border-blue-200"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
        }`;
      default:
        return baseStyles;
    }
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className={`flex gap-1 ${variant === "underline" ? "border-b border-slate-200" : "p-1 bg-slate-100 rounded-xl"}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={getTabStyles(activeTab === tab.id)}
          >
            {tab.icon && <span className="text-current">{tab.icon}</span>}
            {tab.label}
            
            {/* Active indicator for pills variant */}
            {variant === "pills" && activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-6"
      >
        {activeContent}
      </motion.div>
    </div>
  );
}
