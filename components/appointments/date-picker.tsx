'use client';

interface DatePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export function DatePicker({ date, onDateChange }: DatePickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Date</label>
      <input
        type="date"
        value={date.toISOString().split('T')[0]}
        onChange={(e) => onDateChange(new Date(e.target.value))}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}