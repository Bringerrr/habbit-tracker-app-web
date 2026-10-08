'use client';

import { Check, Flag } from "lucide-react";
import { priorities } from "../const";
import { useCreateHabitStore } from "../model/createHabitStore";
import { Label } from "shared/ui";


export const HabitPrioritySelector = () => {

       const {
        priority,
        setPriority,
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
              <Flag className="h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <div>
              <Label className="text-sm font-semibold">
                Priority
              </Label>

              <p className="text-xs text-muted-foreground">
                How important is this habit?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {priorities.map((item) => {
              const selected = priority === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setPriority(item.value)}
                  className={`
                    group relative rounded-2xl border
                    p-4 text-left
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
                  <div className="flex items-start justify-between">
                    <div
                      className={`
                        flex h-9 w-9 items-center justify-center
                        rounded-xl
                        ${
                          item.value === "high"
                            ? "bg-red-500/10 text-red-500"
                            : item.value === "medium"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-emerald-500/10 text-emerald-500"
                        }
                      `}
                    >
                      <span
                        className={`
                          h-2.5 w-2.5 rounded-full
                          ${
                            item.value === "high"
                              ? "bg-red-500"
                              : item.value === "medium"
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                          }
                        `}
                      />
                    </div>

                    {selected && (
                      <span
                        className="
                          flex h-5 w-5 items-center justify-center
                          rounded-full
                          bg-primary
                          text-primary-foreground
                        "
                      >
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm font-semibold">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
    )
}