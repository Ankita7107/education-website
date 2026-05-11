"use client";
import { motion } from "framer-motion";
import { 
  Briefcase, CheckCircle, XCircle, Eye, 
  Search, Filter, Clock, Building2, MapPin
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

const pendingJobsData = [
  { 
    id: 1, 
    company: "TechCorp Solutions", 
    role: "Sr. Frontend Developer", 
    location: "Bangalore", 
    salary: "₹12L - ₹18L", 
    date: "2 hours ago", 
    type: "Full-time",
    verified: false
  },
  { 
    id: 2, 
    company: "RetailPro India", 
    role: "Store Manager", 
    location: "Mumbai", 
    salary: "₹4L - ₹6L", 
    date: "5 hours ago", 
    type: "Full-time",
    verified: true
  },
  { 
    id: 3, 
    company: "LogiCo Logistics", 
    role: "Delivery Partner", 
    location: "Delhi", 
    salary: "₹25k - ₹35k", 
    date: "Today", 
    type: "Part-time",
    verified: false
  },
  { 
    id: 4, 
    company: "EduFirst Academy", 
    role: "Math Teacher", 
    location: "Pune", 
    salary: "₹5L - ₹8L", 
    date: "Yesterday", 
    type: "Full-time",
    verified: true
  },
];

export default function JobApprovalsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <DashboardLayout role="admin" title="Job Approval Queue">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">Verification Queue</h1>
          <p className="text-slate-500 text-sm mt-1">Review and approve new job postings before they go live.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
            <Search size={16} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search companies..." 
              className="bg-transparent border-none outline-none text-sm text-slate-700 w-48"
            />
          </div>
          <button className="bg-white border border-slate-200 rounded-xl p-2 text-slate-600 hover:text-blue-600 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {pendingJobsData.map((job, i) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shrink-0">
                  <Building2 size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                    {job.verified && (
                      <span className="badge-verified py-0.5 px-2 text-[9px]">Verified Employer</span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm font-medium flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Building2 size={14} /> {job.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.date}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider">{job.type}</span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 lg:border-l lg:pl-6 border-slate-100">
                <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all px-4 py-2 rounded-xl text-xs font-bold border border-emerald-100">
                  <CheckCircle size={16} /> Approve Post
                </button>
                <button className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all px-4 py-2 rounded-xl text-xs font-bold border border-red-100">
                  <XCircle size={16} /> Reject
                </button>
                <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-transparent hover:border-blue-100">
                  <Eye size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {pendingJobsData.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
            <CheckCircle size={32} />
          </div>
          <h3 className="font-bold text-slate-900">All caught up!</h3>
          <p className="text-slate-500 text-sm">No pending job posts to review at the moment.</p>
        </div>
      )}
    </DashboardLayout>
  );
}
