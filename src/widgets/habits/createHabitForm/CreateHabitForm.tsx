"use client";

import {
  Sparkles,
} from "lucide-react";

import { Button } from "shared/ui";
import type { Habit } from "core/habits/types";
import { HabitBasicFields, HabitFrequencySelector, HabitPrioritySelector, HabitStartDate } from "features/habit/create";
import { useCreateHabitStore } from "features/habit/create/model/createHabitStore";


interface CreateHabitFormProps {
  onSubmit?: (habit: Habit) => void;
  onCancel?: () => void;
}

export function CreateHabitForm({
  onSubmit,
  onCancel,
}: CreateHabitFormProps) {
  const {
    name,
    description,
    priority,
    frequency,
    startDate,
    setError,
  } = useCreateHabitStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Give your habit a name to get started.");
      return;
    }

    setError("");

    const data = {
      name: name.trim(),
      description: description.trim(),
      priority,
      frequency,
      startDate,
    }

    onSubmit?.(data);

    console.log('data', data);
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative w-full max-w-2xl overflow-hidden
        rounded-[28px]
        border border-border/60
        bg-card
        shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-40
          bg-gradient-to-b from-primary/[0.07] to-transparent
        "
      />
      <div className="relative border-b border-border/60 px-7 py-7 sm:px-9 sm:py-8">
        <div className="flex items-start gap-4">
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl
              bg-primary
              text-primary-foreground
              shadow-lg shadow-primary/20
            "
          >
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Create a new habit
              </h2>
            </div>

            <p className="mt-1.5 max-w-lg text-sm leading-6 text-muted-foreground">
              Turn something meaningful into a consistent part of your life.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 px-7 py-7 sm:px-9 sm:py-9">
        <HabitBasicFields />
        <HabitPrioritySelector />
        <HabitFrequencySelector/>
        <HabitStartDate/>
      </div>

      {/* Footer */}
      <div
        className="
          flex flex-col-reverse gap-3
          border-t border-border/60
          bg-muted/20
          px-7 py-5
          sm:flex-row sm:items-center sm:justify-between
          sm:px-9
        "
      >
        <p className="hidden text-xs text-muted-foreground sm:block">
          Small steps become lasting habits.
        </p>

        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          {onCancel && (
            <Button
              type="button"
              variant="ghost"
              onClick={onCancel}
              className="rounded-xl px-5"
            >
              Cancel
            </Button>
          )}

          <Button
            type="submit"
            className="
              rounded-xl px-6
              shadow-lg shadow-primary/15
              transition-all
              hover:-translate-y-0.5
              hover:shadow-xl hover:shadow-primary/20
            "
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Create habit
          </Button>
        </div>
      </div>
    </form>
  );
}

