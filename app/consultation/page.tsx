'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { VideoInterface } from '@/components/consultation/video-interface';

export default function ConsultationPage() {
  const [isInCall, setIsInCall] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Video Consultation</h1>
        {!isInCall ? (
          <div className="text-center">
            <p className="mb-4">Your next appointment is scheduled for [Date and Time].</p>
            <Button onClick={() => setIsInCall(true)}>Join Call</Button>
          </div>
        ) : (
          <VideoInterface onEndCall={() => setIsInCall(false)} />
        )}
      </div>
    </Layout>
  );
}