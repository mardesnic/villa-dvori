'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

type BookedRange = { start: string; end: string };

function buildCells(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  let offset = first.getDay() - 1;
  if (offset < 0) offset = 6;
  const total = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: total }, (_, i) => new Date(year, month, i + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function parseLocal(str: string): number {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d).getTime();
}

function isBooked(date: Date, ranges: BookedRange[]): boolean {
  const t = date.getTime();
  return ranges.some(r => t >= parseLocal(r.start) && t < parseLocal(r.end));
}

// Season is June–September; everything else is off-season
function isOffSeason(date: Date): boolean {
  const m = date.getMonth();
  return m < 4 || m > 8;
}

function MonthCalendar({
  year,
  month,
  booked,
  today,
  locale,
  dayNames,
}: {
  year: number;
  month: number;
  booked: BookedRange[];
  today: Date;
  locale: string;
  dayNames: string[];
}) {
  const cells = buildCells(year, month);
  const monthLabel = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })
    .format(new Date(year, month))
    .toUpperCase();

  return (
    <div>
      <p
        style={{
          textAlign: 'center',
          letterSpacing: '0.12em',
          fontSize: '0.75rem',
          fontWeight: 600,
          marginBottom: '0.6rem',
          color: '#555',
        }}
      >
        {monthLabel}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {dayNames.map((d, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              fontSize: '0.6rem',
              color: i === 5 ? '#b08d6a' : '#aaa',
              fontWeight: 600,
              paddingBottom: 6,
            }}
          >
            {d}
          </div>
        ))}
        {cells.map((date, i) => {
          if (!date) return <div key={`e${i}`} />;
          const past = date < today;
          const offSeason = isOffSeason(date);
          const booked_ = !past && !offSeason && isBooked(date, booked);
          const isToday = date.toDateString() === today.toDateString();
          const isSat = date.getDay() === 6;
          const muted = past || offSeason;

          return (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '5px 0',
                fontSize: '0.75rem',
                borderRadius: 3,
                background: 'transparent',
                color: muted ? '#ccc' : booked_ ? '#bbb' : isSat ? '#b08d6a' : '#333',
                fontWeight: isToday ? 700 : 400,
                textDecoration: booked_ ? 'line-through' : 'none',
                position: 'relative',
              }}
            >
              {date.getDate()}
              {isToday && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: '#555',
                    display: 'block',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar({
  booked,
  generated,
}: {
  booked: BookedRange[];
  generated: string;
}) {
  const MAX_OFFSET = 23;
  const [offset, setOffset] = useState(0);
  const t = useTranslations('contact');
  const locale = useLocale();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Mon 1 Jan 2024 is a Monday — use as anchor to get Mon–Sun short names
  const dayNames = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: 'short' })
      .format(new Date(2024, 0, 1 + i))
      .replace(/\.$/, '') // remove trailing dot some locales add
  );

  const m1 = new Date(today.getFullYear(), today.getMonth() + offset);
  const m2 = new Date(today.getFullYear(), today.getMonth() + offset + 1);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
        }}
      >
        <button
          onClick={() => setOffset(o => Math.max(0, o - 1))}
          disabled={offset === 0}
          aria-label='Previous month'
          style={{
            background: 'none',
            border: 'none',
            cursor: offset === 0 ? 'default' : 'pointer',
            fontSize: '1.4rem',
            color: offset === 0 ? '#ccc' : '#555',
            padding: '0 4px',
            lineHeight: 1,
          }}
        >
          ‹
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.62rem', color: '#aaa' }}>
          <span style={{ color: '#bbb', textDecoration: 'line-through' }}>{t('calendarBooked')}</span>
          <span style={{ color: '#333' }}>{t('calendarAvailable')}</span>
          <span style={{ color: '#b08d6a' }}>{t('calendarArrivalDay')}</span>
        </div>

        <button
          onClick={() => setOffset(o => Math.min(MAX_OFFSET, o + 1))}
          disabled={offset >= MAX_OFFSET}
          aria-label='Next month'
          style={{
            background: 'none',
            border: 'none',
            cursor: offset >= MAX_OFFSET ? 'default' : 'pointer',
            fontSize: '1.4rem',
            color: offset >= MAX_OFFSET ? '#ccc' : '#555',
            padding: '0 4px',
            lineHeight: 1,
          }}
        >
          ›
        </button>
      </div>

      <div className='row g-4'>
        <div className='col-12 col-md-6'>
          <MonthCalendar year={m1.getFullYear()} month={m1.getMonth()} booked={booked} today={today} locale={locale} dayNames={dayNames} />
        </div>
        <div className='col-12 col-md-6'>
          <MonthCalendar year={m2.getFullYear()} month={m2.getMonth()} booked={booked} today={today} locale={locale} dayNames={dayNames} />
        </div>
      </div>

      <p style={{ fontSize: '0.6rem', color: '#bbb', marginTop: '1rem', textAlign: 'right' }}>
        {t('calendarUpdated')} {generated}
      </p>
    </div>
  );
}
