import { StatisticEvent as TStatisticEvent } from "../api/statisticEvent/StatisticEvent";

export const STATISTICEVENT_TITLE_FIELD = "eventType";

export const StatisticEventTitle = (record: TStatisticEvent): string => {
  return record.eventType?.toString() || String(record.id);
};
