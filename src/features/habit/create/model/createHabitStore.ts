import { create } from "zustand";

import type {
  HabitFrequency,
  HabitPriority,
} from "core/habits/types";

interface CreateHabitState {
  name: string;
  description: string;
  priority: HabitPriority;
  frequency: HabitFrequency;
  startDate: string;
  error: string;

  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPriority: (priority: HabitPriority) => void;
  setFrequency: (frequency: HabitFrequency) => void;
  setStartDate: (startDate: string) => void;

  setError: (error: string) => void;
  reset: () => void;
}

const getTodayDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const initialState = {
  name: "",
  description: "",
  priority: "medium" as HabitPriority,
  frequency: "daily" as HabitFrequency,
  startDate: getTodayDate(),
  error: "",
};

export const useCreateHabitStore = create<CreateHabitState>((set) => ({
  ...initialState,

  setName: (name) =>
    set({
      name,
      error: "",
    }),

  setDescription: (description) =>
    set({
      description,
    }),

  setPriority: (priority) =>
    set({
      priority,
    }),

  setFrequency: (frequency) =>
    set({
      frequency,
    }),

  setStartDate: (startDate) =>
    set({
      startDate,
    }),

  setError: (error) =>
    set({
      error,
    }),

  reset: () =>
    set({
      ...initialState,
      startDate: getTodayDate(),
    }),
}));