"use client";
import { motion } from "framer-motion";
import { 
  Briefcase, Search, Filter, MapPin, 
  Clock, CheckCircle, XCircle, Eye 
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

const applicationsData = [
  { id: 1, title: "React Developer", company: "TechCorp", city: "Bangalore", salary: "₹12L - ₹18L", date: "Applied 2 days ago", status: "Shortlisted" },
  { id: 2, title: "UI/UX Designer", company: "DesignHub", city: "Mumbai", salary: "₹8L - ₹12L", date: "Applied 5 days ago", status: "Under Review" },
  { id: 3, title: "Software Engineer", company: "InnoSoft", city: "Pune", salary: "₹15L - ₹22L", date: "Applied 1 week ago", status: "Interview" },
  { id: 4, title: "Frontend Developer", company: "WebCraft", city: "Hyderabad", salary: "₹6L - ₹10L", date: "Applied 2 weeks ago", status: "Rejected" },
  { id: 5, title: "Backend Engineer", company: "DataSystems", city: "Bangalore", salary: "₹14L - ₹20L", date: "Applied 3 weeks ago", status: "Closed" },
];

export default function EmployeeApplicationsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <DashboardLayout role="employee" title="My Applications">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">Track Applications</h1>
          <p className="text-slate-500 text-sm mt-1">Keep an eye on your progress with various companies.</p>
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
          <button className="bg-white border border-slate-200 rounded-xl p-2 text-slate-600 hover:text-emerald-600 shadow-sm">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {applicationsData.map((app, i) => (
          <motion.div 
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{app.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <p className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                      <span className="font-bold">{app.company}</span>
                    </p>
                    <p className="text-slate-400 text-xs flex items-center gap-1.5">
                      <MapPin size={12} /> {app.city}
                    </p>
                    <p className="text-slate-400 text-xs flex items-center gap-1.5">
                      <Clock size={12} /> {app.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-900">{app.salary}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Monthly CTC</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                    app.status === "Shortlisted" ? "bg-blue-50 text-blue-700 border-blue-100" :
                    app.status === "Interview" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                    app.status === "Rejected" ? "bg-red-50 text-red-600 border-red-100" :
                    app.status === "Closed" ? "bg-slate-50 text-slate-500 border-slate-200" :
                    "bg-amber-50 text-amber-700 border-amber-100"
                  }`}>
                    {app.status}
                  </span>
                  <button className="p-2 text-slate-300 hover:text-emerald-600 transition-colors">
                    <Eye size={18} />
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
