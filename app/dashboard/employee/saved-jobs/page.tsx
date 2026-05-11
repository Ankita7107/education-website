"use client";
import { motion } from "framer-motion";
import { 
  Briefcase, Search, Filter, MapPin, 
  Clock, Star, Trash2, ArrowRight
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

const savedJobsData = [
  { id: 1, title: "Lead Frontend Engineer", company: "MetaStream", city: "Remote", salary: "₹18L - ₹25L", date: "Saved 2 days ago", type: "Full-time" },
  { id: 2, title: "Product Designer", company: "Creativ", city: "Mumbai", salary: "₹10L - ₹15L", date: "Saved 3 days ago", type: "Full-time" },
  { id: 3, title: "Full Stack Developer", company: "AppX", city: "Bangalore", salary: "₹12L - ₹20L", date: "Saved 1 week ago", type: "Contract" },
];

export default function SavedJobsPage() {
  return (
    <DashboardLayout role="employee" title="Saved Jobs">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Your Bookmarks</h1>
        <p className="text-slate-500 text-sm mt-1">Jobs you&apos;ve saved to apply for later.</p>
      </div>

      <div className="grid gap-4">
        {savedJobsData.map((job, i) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100 shrink-0">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                  <p className="text-slate-500 text-sm font-medium mt-0.5">{job.company} · {job.city}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">{job.type}</span>
                    <span className="text-[10px] font-bold text-emerald-600">{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                  <Trash2 size={18} />
                </button>
                <Link 
                  href="/jobs" 
                  className="flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 transition-all px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {savedJobsData.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
              <Star size={32} />
            </div>
            <h3 className="font-bold text-slate-900">No saved jobs</h3>
            <p className="text-slate-500 text-sm">When you find a job you like, click the star to save it here.</p>
            <Link href="/jobs" className="inline-block mt-6 text-emerald-600 font-bold text-sm">Browse Jobs →</Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
