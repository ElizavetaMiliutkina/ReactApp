import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter.ts";
import { CounterSchema } from "@/entities/Counter";

export const getCounterValue = createSelector(
  getCounter, (counter: CounterSchema) => counter.value
);
