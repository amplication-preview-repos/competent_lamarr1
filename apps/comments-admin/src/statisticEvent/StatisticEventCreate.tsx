import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StatisticEventCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
