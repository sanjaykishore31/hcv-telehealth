'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface ResourceCardProps {
  title: string;
  description: string;
}

export function ResourceCard({ title, description }: ResourceCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link href="#" className="text-primary hover:underline">
        Read more
      </Link>
    </Card>
  );
}