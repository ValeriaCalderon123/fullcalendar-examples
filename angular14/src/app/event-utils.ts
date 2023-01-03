import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const DAY_TODAY = new Date().getDay();
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'CURSO MACHINE LEARNING',
    start: TODAY_STR,
    end: TODAY_STR,
    number: DAY_TODAY
    
  },
  {
    id: createEventId(),
    title: 'CURSO PYTHON PARA EL ANALISIS',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',
    number: DAY_TODAY
  },
  {
    id: createEventId(),
    title: 'CURSO BIG DATA',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    number: DAY_TODAY
  }
];

export function createEventId() {
  return String(eventGuid++);
}
