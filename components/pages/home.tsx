'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const features = [
  { 
    title: "Expert Care", 
    description: "Our team of clinicians provides top-notch hepatitis C treatment and support." 
  },
  { 
    title: "Convenient", 
    description: "Access care from anywhere with our secure video consultations." 
  },
  { 
    title: "Confidential", 
    description: "Your privacy is our priority. All consultations and data are kept strictly confidential." 
  },
];

export function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Be cured of Hepatitis C - for free</h1>
        <p className="text-xl text-gray-600">
          Convenient and confidential Hepatitis C care from the comfort of your home, at no cost to you
        </p>
        <Link href="/appointments">
          <Button>Schedule an Appointment</Button>
        </Link>
      </section>
      <section className="grid md:grid-cols-3 gap-8">
        {features.map(({ title, description }) => (
          <Card key={title}>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p>{description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}