'use client';

import { Layout } from '@/components/layout/layout';
import { AppointmentForm } from '@/components/appointments/appointment-form';

export default function AppointmentsPage() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <AppointmentForm />
      </div>
    </Layout>
  );
}