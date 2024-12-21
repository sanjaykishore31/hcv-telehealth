'use client';

interface TimeSelectProps {
  time: string;
  onTimeChange: (time: string) => void;
}

const timeSlots = [
  { value: "09:00", label: "9:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

export function TimeSelect({ time, onTimeChange }: TimeSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Time</label>
      <select
        value={time}
        onChange={(e) => onTimeChange(e.target.value)}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <option value="">Select a time</option>
        {timeSlots.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}