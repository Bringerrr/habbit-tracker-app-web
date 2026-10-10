import { Habit } from "core/habits/types";
import { api } from "shared";

export async function createHabitApi(
  data: Omit<Habit, "id">
): Promise<Habit> {
  const response = await api.post<Habit>("/habits", data);
  return response.data;
}