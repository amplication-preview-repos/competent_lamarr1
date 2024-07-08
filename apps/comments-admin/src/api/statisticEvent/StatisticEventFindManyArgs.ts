import { StatisticEventWhereInput } from "./StatisticEventWhereInput";
import { StatisticEventOrderByInput } from "./StatisticEventOrderByInput";

export type StatisticEventFindManyArgs = {
  where?: StatisticEventWhereInput;
  orderBy?: Array<StatisticEventOrderByInput>;
  skip?: number;
  take?: number;
};
