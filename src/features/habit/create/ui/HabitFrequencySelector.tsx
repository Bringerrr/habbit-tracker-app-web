'use client';

import { Check, Flame, Repeat2 } from "lucide-react";
import { Label } from "shared/ui";

import { frequencies } from "../const";
import { useCreateHabitStore } from "../model/createHabitStore";

export const HabitFrequencySelector = () => {
      const {
        frequency,
        setFrequency,
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
              <Repeat2 className="h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <div>
              <Label className="text-sm font-semibold">
                Frequency
              </Label>

              <p className="text-xs text-muted-foreground">
                How often do you want to do it?
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {frequencies.map((item) => {
              const selected = frequency === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFrequency(item.value)}
                  className={`
                    group relative flex items-center gap-4
                    rounded-2xl border p-4
                    text-left
                    transition-all duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/30
                    ${
                      selected
                        ? "border-primary/50 bg-primary/[0.06] shadow-sm"
                        : "border-border/70 bg-background hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted/30 hover:shadow-sm"
                    }
                  `}
                >
                  <div
                    className={`
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-xl transition-colors
                      ${
                        selected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }
                    `}
                  >
                    {item.value === "daily" ? (
                      <Flame className="h-5 w-5" />
                    ) : (
                      <Repeat2 className="h-5 w-5" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {selected && (
                    <span
                      className="
                        absolute right-3 top-3
                        flex h-5 w-5 items-center justify-center
                        rounded-full
                        bg-primary
                        text-primary-foreground
                      "
                    >
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
    )
}