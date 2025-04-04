import * as v from "valibot";

export const SettingSchema = v.object({
  engine: v.picklist(["rfc9535", "jsonpath-plus"]),
  outputPaths: v.boolean(),
});

export type Setting = v.InferInput<typeof SettingSchema>;
