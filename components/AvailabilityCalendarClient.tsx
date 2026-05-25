'use client';

import dynamic from 'next/dynamic';

type BookedRange = { start: string; end: string };

const AvailabilityCalendar = dynamic(() => import('./AvailabilityCalendar'), {
  ssr: false,
  loading: () => <div style={{ minHeight: 320 }} />,
});

export default function AvailabilityCalendarClient({
  booked,
  generated,
}: {
  booked: BookedRange[];
  generated: string;
}) {
  return <AvailabilityCalendar booked={booked} generated={generated} />;
}
