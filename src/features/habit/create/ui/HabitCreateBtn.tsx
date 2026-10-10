import { Button } from "@base-ui/react";
import { Sparkles } from "lucide-react";
import { useCreateHabitStore } from "../model/createHabitStore";
import { createHabitSevice } from "../service/createHabitService";
import { toast } from "sonner";

export const HabitCreateBtn = () => {
      const {
        name,
        description,
        priority,
        frequency,
        startDate,
        setError,
      } = useCreateHabitStore();

      const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
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

        try {
          await createHabitSevice(data)
        } catch (error) {
            toast.error("Failed to create habit", {
              description: "Please check your connection and try again.",
            });
        }
        
    };

    return (
          <Button
            onClick={handleSubmit}
            type="submit"
            className="
              flex flex
              justify-center items-center
              rounded-xl px-4 py-2
              shadow-lg shadow-primary/15
              transition-all
              hover:-translate-y-0.5
              hover:shadow-xl hover:shadow-primary/20
            "
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Create habit
          </Button>
    )
}
