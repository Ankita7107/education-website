"use client";
import { motion } from "framer-motion";
import { 
  Phone, PhoneIncoming, PhoneOutgoing, 
  CheckCircle, XCircle, Clock, 
  Search, Play, Pause, BarChart
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const callLogs = [
  { id: 1, name: "Rahul Sharma", status: "Interested", duration: "1m 20s", time: "10:30 AM" },
  { id: 2, name: "Priya Patel", status: "Not Interested", duration: "0m 45s", time: "11:15 AM" },
  { id: 3, name: "Amit Singh", status: "No Answer", duration: "0m 00s", time: "11:45 AM" },
  { id: 4, name: "Neha Gupta", status: "Interested", duration: "2m 10s", time: "12:30 PM" },
];

export default function AICallingPage() {
  return (
    <DashboardLayout role="employer" title="AI Recruitment Agent">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest">AI Agent Online</p>
            </div>
            <h2 className="font-heading text-3xl font-extrabold mb-2">Automated Candidate Outreach</h2>
            <p className="text-blue-100 text-sm max-w-md leading-relaxed mb-8">
              Your AI agent is currently calling candidates for the "React Developer" role. It filters leads based on interest and salary expectations.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-2xl text-sm flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                <Pause size={16} fill="currentColor" /> Pause Calling
              </button>
              <button className="bg-white/20 text-white font-bold px-6 py-3 rounded-2xl text-sm flex items-center gap-2 hover:bg-white/30 transition-colors">
                View Script
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
           <div>
             <h3 className="font-heading font-bold text-slate-900 mb-1">Today&apos;s Metrics</h3>
             <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Real-time status</p>
             <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500">Calls Made</span>
                  <span className="font-bold text-slate-900">48</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500">Interests</span>
                  <span className="font-bold text-emerald-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500">Conversion</span>
                  <span className="font-bold text-blue-600">25%</span>
                </div>
             </div>
           </div>
           <div className="mt-8 pt-6 border-t border-slate-50">
              <button className="w-full text-blue-600 font-bold text-[11px] flex items-center justify-center gap-1 hover:underline">
                Full Analytics Report <BarChart size={12} />
              </button>
           </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="font-heading font-bold text-slate-900">Live Call Logs</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {callLogs.map((log) => (
            <div key={log.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  log.status === "Interested" ? "bg-emerald-50 text-emerald-600" : 
                  log.status === "Not Interested" ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-400"
                }`}>
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{log.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{log.time} · {log.duration}</p>
                </div>
              </div>
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  log.status === "Interested" ? "bg-emerald-50 text-emerald-700" : 
                  log.status === "Not Interested" ? "bg-red-50 text-red-700" : "bg-slate-100 text-slate-500"
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
