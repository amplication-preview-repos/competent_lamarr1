import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatisticEventService } from "./statisticEvent.service";
import { StatisticEventControllerBase } from "./base/statisticEvent.controller.base";

@swagger.ApiTags("statisticEvents")
@common.Controller("statisticEvents")
export class StatisticEventController extends StatisticEventControllerBase {
  constructor(protected readonly service: StatisticEventService) {
    super(service);
  }
}
