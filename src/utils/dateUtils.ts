import { format, isAfter, isValid, parseISO, sub } from 'date-fns';

export const parseDateString = (dateString: string): Date => {
  if (dateString === 'now') return new Date();

  if (dateString.startsWith('now-')) {
    const amount = parseInt(dateString.substring(4, dateString.length - 1));
    const unit = dateString.substring(dateString.length - 1);
    const now = new Date();

    switch (unit) {
      case 's': return sub(now, { seconds: amount });
      case 'm': return sub(now, { minutes: amount });
      case 'h': return sub(now, { hours: amount });
      case 'd': return sub(now, { days: amount });
      case 'w': return sub(now, { weeks: amount });
      case 'M': return sub(now, { months: amount });
      case 'y': return sub(now, { years: amount });
      default:
        throw new Error(`Unknown time unit: ${unit}`);
    }
  }

  const parsed = parseISO(dateString);
  if (!isValid(parsed)) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  return parsed;
};

export const parseAndValidateDate = (dateString: string): Date | null => {
  try {
    return parseDateString(dateString);
  } catch {
    return null;
  }
};

export const validateTimeRange = (start: string, end: string): boolean => {
  const startDate = parseAndValidateDate(start);
  const endDate = parseAndValidateDate(end);
  return !!startDate && !!endDate && !isAfter(startDate, endDate);
};

export const formatDisplayDate = (dateString: string): string => {
  const date = parseAndValidateDate(dateString);
  return date ? format(date, 'dd.MM.yyyy HH:mm') : dateString;
};

export const toDateTimeLocalString = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm");
};
