/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StatisticEventWhereInput } from "./StatisticEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatisticEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatisticEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticEventWhereInput)
  @IsOptional()
  @Field(() => StatisticEventWhereInput, {
    nullable: true,
  })
  every?: StatisticEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatisticEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticEventWhereInput)
  @IsOptional()
  @Field(() => StatisticEventWhereInput, {
    nullable: true,
  })
  some?: StatisticEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatisticEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticEventWhereInput)
  @IsOptional()
  @Field(() => StatisticEventWhereInput, {
    nullable: true,
  })
  none?: StatisticEventWhereInput;
}
export { StatisticEventListRelationFilter as StatisticEventListRelationFilter };
