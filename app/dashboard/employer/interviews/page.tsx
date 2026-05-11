"use client";
import { motion } from "framer-motion";
import { 
  Video, Play, CheckCircle, Clock, 
  Search, Filter, Star, MessageSquare,
  BarChart, Download
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const interviewReports = [
  { id: 1, name: "Ankit Verma", role: "React Developer", score: 94, status: "High Potential", duration: "12m 40s", date: "May 8, 2024" },
  { id: 2, name: "Sunita Rao", role: "Sales Manager", score: 81, status: "Good Match", duration: "15m 10s", date: "May 7, 2024" },
  { id: 3, name: "Rajan Mehta", role: "Accountant", score: 65, status: "Average", duration: "10m 05s", date: "May 6, 2024" },
  { id: 4, name: "Kavya Reddy", role: "HR Executive", score: 88, status: "High Potential", duration: "14m 20s", date: "May 5, 2024" },
];

export default function AIInterviewsPage() {
  return (
    <DashboardLayout role="employer" title="AI Interview Intelligence">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">Screening Reports</h1>
          <p className="text-slate-500 text-sm mt-1">Review AI-generated assessment scores and feedback.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
            <Search size={16} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="bg-transparent border-none outline-none text-sm text-slate-700 w-40"
            />
          </div>
          <button className="bg-white border border-slate-200 rounded-xl p-2 text-slate-600 hover:text-blue-600 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {interviewReports.map((report, i) => (
          <motion.div 
            key={report.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shrink-0 overflow-hidden relative">
                   <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">
                    {report.name[0]}
                   </div>
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-white" fill="currentColor" />
                   </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{report.name}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      report.status === "High Potential" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium flex items-center gap-4">
                    <span>{report.role}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {report.duration}</span>
                    <span className="flex items-center gap-1.5">{report.date}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 shrink-0 lg:border-l lg:pl-6 border-slate-100">
                <div className="text-center">
                  <p className={`text-xl font-black ${
                    report.score >= 85 ? "text-emerald-600" : report.score >= 75 ? "text-blue-600" : "text-amber-600"
                  }`}>
                    {report.score}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Score</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all border border-blue-100">
                    <BarChart size={18} />
                  </button>
                  <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl transition-all border border-slate-100">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
