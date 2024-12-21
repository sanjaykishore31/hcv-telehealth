'use client';

import { Layout } from '@/components/layout/layout';
import { DashboardCard } from '@/components/dashboard/dashboard-card';

const dashboardItems = [
  { title: "Upcoming Appointments", content: "You have no upcoming appointments." },
  { title: "Treatment Progress", content: "Your treatment is 50% complete." },
  { title: "Recent Test Results", content: "No recent test results available." },
  { title: "Medications", content: "View your current medications and schedule." },
];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Patient Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {dashboardItems.map((item) => (
            <DashboardCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}