"use client";
import { motion } from "framer-motion";
import { 
  TrendingUp, Users, Eye, MousePointer2, 
  Calendar, ArrowUpRight, BarChart3, PieChart
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const analyticsData = [
  { id: 1, title: "React Developer", views: "2.4k", clicks: "840", apps: "48", conversion: "5.7%" },
  { id: 2, title: "Sales Manager", views: "4.1k", clicks: "1.2k", apps: "92", conversion: "7.6%" },
  { id: 3, title: "HR Executive", views: "1.2k", clicks: "310", apps: "31", conversion: "10.0%" },
];

export default function JobAnalyticsPage() {
  return (
    <DashboardLayout role="employer" title="Performance Analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Job Views", value: "12,840", icon: Eye, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Applications", value: "226", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Avg. Conversion", value: "7.8%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">+14%</span>
            </div>
            <h3 className="font-heading text-3xl font-extrabold text-slate-900">{stat.value}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-heading font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 size={18} className="text-blue-600" /> Per-Job Performance
          </h3>
          <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            Download Report <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="text-left px-6 py-4">Job Role</th>
                <th className="text-center px-6 py-4">Impressions</th>
                <th className="text-center px-6 py-4">Clicks</th>
                <th className="text-center px-6 py-4">Applications</th>
                <th className="text-center px-6 py-4">Conversion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {analyticsData.map((data) => (
                <tr key={data.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-800">{data.title}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Active for 12 days</p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-slate-600">{data.views}</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-slate-600">{data.clicks}</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-blue-600">{data.apps}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-black text-slate-800 bg-slate-100 px-2 py-1 rounded-lg">{data.conversion}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
