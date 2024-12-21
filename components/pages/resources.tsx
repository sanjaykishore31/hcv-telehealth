'use client';

import { Card } from '@/components/ui/card';
import { ResourceCard } from '@/components/resources/resource-card';

const resources = [
  {
    title: "About Hepatitis C",
    description: "Learn about Hepatitis C, its causes, symptoms, and treatment options.",
  },
  {
    title: "Treatment Guide",
    description: "Understand the treatment process, medications, and what to expect.",
  },
  {
    title: "Lifestyle Tips",
    description: "Discover lifestyle changes that can support your treatment and overall health.",
  },
  {
    title: "Support Groups",
    description: "Connect with others who are going through similar experiences.",
  },
];

export function ResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hepatitis C Resources</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </div>
  );
}