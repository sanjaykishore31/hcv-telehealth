'use client';

import { Button } from '@/components/ui/button';

interface VideoInterfaceProps {
  onEndCall: () => void;
}

export function VideoInterface({ onEndCall }: VideoInterfaceProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-white">
        [Video Call Interface]
      </div>
      <Button onClick={onEndCall} variant="destructive" className="w-full">
        End Call
      </Button>
    </div>
  );
}