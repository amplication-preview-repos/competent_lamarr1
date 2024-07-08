import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StatisticEventWhereInput = {
  id?: StringFilter;
  eventType?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
