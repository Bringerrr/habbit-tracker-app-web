"use client";

import { Label, Textarea, Input } from "shared/ui";
import { useCreateHabitStore } from "../model/createHabitStore";

export const HabitBasicFields = () => {
    const {
        name,
        description,
        error,

        setName,
        setDescription,
        setError,
    } = useCreateHabitStore();

    return(
        <div>
            <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="habit-name"
              className="text-sm font-semibold"
            >
              Habit name
            </Label>

            <span className="text-xs text-muted-foreground">
              Required
            </span>
          </div>

          <Input
            id="habit-name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            placeholder="e.g. Practice programming"
            className="
              h-12 rounded-xl
              border-border/70
              bg-background
              px-4
              text-base
              shadow-sm
              transition-all
              placeholder:text-muted-foreground/60
              focus-visible:ring-2
              focus-visible:ring-primary/20
            "
            autoFocus
          />

          {error && (
            <div className="flex items-center gap-2 text-sm font-medium text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              {error}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="habit-description"
              className="text-sm font-semibold"
            >
              Description
            </Label>

            <span className="text-xs text-muted-foreground">
              Optional
            </span>
          </div>

          <Textarea
            id="habit-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What does success look like?"
            rows={3}
            className="
              resize-none rounded-xl
              border-border/70
              bg-background
              px-4 py-3
              shadow-sm
              transition-all
              placeholder:text-muted-foreground/60
              focus-visible:ring-2
              focus-visible:ring-primary/20
            "
          />
        </div>
        </div>
    )
}