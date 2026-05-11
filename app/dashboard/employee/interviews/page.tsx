"use client";
import { motion } from "framer-motion";
import { 
  Video, Calendar, Clock, MapPin, 
  ChevronRight, Play, CheckCircle, AlertCircle
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const interviews = [
  { 
    id: 1, 
    company: "InnoSoft", 
    role: "Software Engineer", 
    type: "AI Interview", 
    date: "Available Now", 
    duration: "15 mins",
    status: "Pending",
    urgent: true
  },
  { 
    id: 2, 
    company: "DesignHub", 
    role: "UI/UX Designer", 
    type: "Technical Round", 
    date: "14th May, 11:00 AM", 
    duration: "45 mins",
    status: "Scheduled",
    urgent: false
  },
];

export default function InterviewsPage() {
  return (
    <DashboardLayout role="employee" title="Interview Hub">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Interviews & Assessments</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your upcoming AI screenings and technical rounds.</p>
      </div>

      <div className="grid gap-6">
        {/* AI Interview Call to Action */}
        <div className="bg-linear-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-600/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 max-w-lg">
            <h2 className="font-heading text-2xl font-bold mb-3">Practice with AI Interviewer</h2>
            <p className="text-emerald-50/80 text-sm leading-relaxed mb-6">
              Boost your confidence by practicing with our AI. Get instant feedback on your answers, body language, and confidence levels.
            </p>
            <button className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-2xl text-sm flex items-center gap-2 hover:bg-emerald-50 transition-colors shadow-lg">
              <Play size={16} fill="currentColor" /> Start Practice Session
            </button>
          </div>
        </div>

        {/* Interview List */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 px-1">Upcoming Rounds</h3>
          {interviews.map((int, i) => (
            <motion.div 
              key={int.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white border ${int.urgent ? 'border-amber-200' : 'border-slate-100'} rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    int.type === "AI Interview" ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {int.type === "AI Interview" ? <AlertCircle size={24} /> : <Video size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{int.role}</h4>
                    <p className="text-slate-500 text-xs font-medium mb-2">{int.company} · {int.type}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                        <Calendar size={12} /> {int.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                        <Clock size={12} /> {int.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                    int.status === "Pending" ? "bg-amber-50 text-amber-700 border border-amber-100" : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}>
                    {int.status}
                  </span>
                  <button className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    int.type === "AI Interview" 
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/20" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}>
                    {int.type === "AI Interview" ? "Join AI Interview" : "Interview Details"}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
