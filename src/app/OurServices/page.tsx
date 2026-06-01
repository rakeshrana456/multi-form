"use client";

import { useState } from "react";
import { services }  from "@/Data/data.js";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OurServiceProps {
  onContinue: () => void;
    onBack: () => void;
}

export default function OurService({
  onContinue,
  onBack
}: OurServiceProps) {
  const [selected, setSelected] = useState(3);

  return (
    <div className="rounded-[32px] border bg-white p-10 shadow-sm">
   
      <div className="mb-10">
        <h2 className="text-5xl font-bold text-[#1E1B4B]">
          Our Service
        </h2>

        <p className="mt-2 text-[#6B7280] text-lg">
          Select the plan that best fits your needs and budget.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => setSelected(service.id)}
              className={cn(
                "cursor-pointer rounded-2xl border p-8 transition-all",
                selected === service.id
                  ? "border-[#4A3AFF]"
                  : "border-gray-200"
              )}
            >
              <div className="flex flex-col items-center">
               
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F3FF] shadow-sm">
                  <Icon
                    size={30}
                    className="text-[#4A3AFF]"
                  />
                </div>

               
                <h3 className="text-lg font-medium text-[#1E1B4B] text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 flex justify-between">
        <Button
          variant="outline"
          className="h-14 w-36 rounded-xl"
          onClick={onBack}
        >
          Back
        </Button>

        <Button onClick={onContinue} className="h-14 w-36 rounded-xl bg-[#4A3AFF] hover:bg-[#3D2FFF]">
          Continue
        </Button>
      </div>
    </div>
  );
}