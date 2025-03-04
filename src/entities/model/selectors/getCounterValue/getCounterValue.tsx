import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter.ts";
import { CounterSchema } from "@/entities";

export const getCounterValue = createSelector(
  getCounter, (counter: CounterSchema) => counter.value
);
