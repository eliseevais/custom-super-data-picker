import {
  format,
  isAfter,
  isValid,
  parseISO,
  sub,
  differenceInSeconds,
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
} from "date-fns";

export const parseDateString = (dateString: string): Date => {
  const now = new Date();

  if (dateString === "now") return now;

  if (dateString.startsWith("now-") && !dateString.includes("/")) {
    const amount = parseInt(dateString.substring(4, dateString.length - 1));
    const unit = dateString.substring(dateString.length - 1);
    switch (unit) {
      case "s":
        return sub(now, { seconds: amount });
      case "m":
        return sub(now, { minutes: amount });
      case "h":
        return sub(now, { hours: amount });
      case "d":
        return sub(now, { days: amount });
      case "w":
        return sub(now, { weeks: amount });
      case "M":
        return sub(now, { months: amount });
      case "y":
        return sub(now, { years: amount });
      default:
        throw new Error(`Unknown time unit: ${unit}`);
    }
  }

  if (dateString.startsWith("now/")) {
    const unit = dateString.substring(4);
    switch (unit) {
      case "d":
        return startOfDay(now);
      case "w":
        return startOfWeek(now, { weekStartsOn: 1 });
      case "M":
        return startOfMonth(now);
      case "y":
        return startOfYear(now);
      default:
        throw new Error(`Unknown truncation unit: ${unit}`);
    }
  }

  if (dateString.includes("/")) {
    const [base, truncation] = dateString.split("/");
    const baseDate = parseDateString(base);
    switch (truncation) {
      case "d":
        return startOfDay(baseDate);
      case "w":
        return startOfWeek(baseDate, { weekStartsOn: 1 });
      case "M":
        return startOfMonth(baseDate);
      case "y":
        return startOfYear(baseDate);
      default:
        throw new Error(`Unknown truncation unit: ${truncation}`);
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
  if (!date) return dateString;

  const now = new Date();
  if (Math.abs(differenceInSeconds(date, now)) < 60) {
    return "now";
  }

  return format(date, "dd.MM.yyyy HH:mm");
};

export const toDateTimeLocalString = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm");
};
