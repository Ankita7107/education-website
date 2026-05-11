"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { ResumeBuilderMain } from "@/app/resume-builder/components/ResumeBuilderMain";

export default function EmployeeResumePage() {
  return (
    <DashboardLayout role="employee" title="Resume Builder">
      {/* Container with minimal top padding to align with dashboard content */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-8">
        <ResumeBuilderMain />
      </div>
    </DashboardLayout>
  );
}
