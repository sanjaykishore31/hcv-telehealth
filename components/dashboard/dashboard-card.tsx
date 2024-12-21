'use client';

import { Card } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  content: string;
}

export function DashboardCard({ title, content }: DashboardCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{content}</p>
    </Card>
  );
}