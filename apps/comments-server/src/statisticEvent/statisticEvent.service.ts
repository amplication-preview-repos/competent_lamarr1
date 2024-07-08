import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatisticEventServiceBase } from "./base/statisticEvent.service.base";

@Injectable()
export class StatisticEventService extends StatisticEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
