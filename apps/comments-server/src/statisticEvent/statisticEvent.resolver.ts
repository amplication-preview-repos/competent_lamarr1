import * as graphql from "@nestjs/graphql";
import { StatisticEventResolverBase } from "./base/statisticEvent.resolver.base";
import { StatisticEvent } from "./base/StatisticEvent";
import { StatisticEventService } from "./statisticEvent.service";

@graphql.Resolver(() => StatisticEvent)
export class StatisticEventResolver extends StatisticEventResolverBase {
  constructor(protected readonly service: StatisticEventService) {
    super(service);
  }
}
