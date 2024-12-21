'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DatePicker } from './date-picker';
import { TimeSelect } from './time-select';

export function AppointmentForm() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const handleSchedule = () => {
    if (!date || !time) {
      alert("Please select both a date and time.");
      return;
    }
    console.log('Appointment scheduled for:', date, 'at', time);
    alert("Appointment scheduled successfully!");
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Schedule an Appointment</h2>
          <p className="text-gray-600">Choose a date and time for your telehealth consultation</p>
        </div>
        <DatePicker date={date} onDateChange={setDate} />
        <TimeSelect time={time} onTimeChange={setTime} />
        <Button onClick={handleSchedule} className="w-full">
          Schedule Appointment
        </Button>
      </div>
    </Card>
  );
}