import { Module } from "@nestjs/common";
import { StatisticEventModuleBase } from "./base/statisticEvent.module.base";
import { StatisticEventService } from "./statisticEvent.service";
import { StatisticEventController } from "./statisticEvent.controller";
import { StatisticEventResolver } from "./statisticEvent.resolver";

@Module({
  imports: [StatisticEventModuleBase],
  controllers: [StatisticEventController],
  providers: [StatisticEventService, StatisticEventResolver],
  exports: [StatisticEventService],
})
export class StatisticEventModule {}
