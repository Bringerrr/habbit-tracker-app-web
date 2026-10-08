export interface Habit {
  id: string;
  name: string;
  description: string;
  priority: HabitPriority;
  frequency: HabitFrequency;
  startDate: string;
}

export type HabitPriority = "high" | "medium" | "low";
export type HabitFrequency = "daily" | "weekly";