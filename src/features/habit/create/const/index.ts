import type { HabitPriority, HabitFrequency } from "core/habits/types";

export const priorities: {
  value: HabitPriority;
  label: string;
  description: string;
}[] = [
  {
    value: "high",
    label: "High",
    description: "Must be done",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Important",
  },
  {
    value: "low",
    label: "Low",
    description: "Nice to have",
  },
];

export const frequencies: {
  value: HabitFrequency;
  label: string;
  description: string;
}[] = [
  {
    value: "daily",
    label: "Every day",
    description: "Build a daily streak",
  },
  {
    value: "weekly",
    label: "Every week",
    description: "Keep a weekly rhythm",
  },
];