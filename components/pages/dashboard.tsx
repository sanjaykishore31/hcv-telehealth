'use client';

import { Card } from '@/components/ui/card';

const dashboardItems = [
  { title: "Upcoming Appointments", content: "You have no upcoming appointments." },
  { title: "Treatment Progress", content: "Your treatment is 50% complete." },
  { title: "Recent Test Results", content: "No recent test results available." },
  { title: "Medications", content: "View your current medications and schedule." },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Patient Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {dashboardItems.map(({ title, content }) => (
          <Card key={title}>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p>{content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}