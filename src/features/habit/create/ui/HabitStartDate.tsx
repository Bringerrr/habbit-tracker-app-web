"use client";

import { Input } from "@base-ui/react"
import { CalendarDays } from "lucide-react"
import { Label } from "shared/ui"
import { useCreateHabitStore } from "../model/createHabitStore";

export const HabitStartDate = () => {

    const {
        startDate,
        setStartDate,
    } = useCreateHabitStore();

    return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div
              className="
                flex h-7 w-7 items-center justify-center
                rounded-lg bg-muted
              "
            >
              <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <div>
              <Label
                htmlFor="habit-start-date"
                className="text-sm font-semibold"
              >
                Start date
              </Label>

              <p className="text-xs text-muted-foreground">
                When do you want to begin?
              </p>
            </div>
          </div>

          <Input
            id="habit-start-date"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="
              h-12 rounded-xl
              border-border/70
              bg-background
              px-4
              shadow-sm
              transition-all
              focus-visible:ring-2
              focus-visible:ring-primary/20
            "
          />
        </div>

    )
}