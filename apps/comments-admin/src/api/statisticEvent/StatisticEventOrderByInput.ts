import { SortOrder } from "../../util/SortOrder";

export type StatisticEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  eventType?: SortOrder;
  timestamp?: SortOrder;
};
