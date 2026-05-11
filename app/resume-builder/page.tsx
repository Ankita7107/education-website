"use client";
import { ResumeBuilderMain } from "./components/ResumeBuilderMain";

export default function ResumeBuilderPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResumeBuilderMain />
      </div>
    </div>
  );
}
