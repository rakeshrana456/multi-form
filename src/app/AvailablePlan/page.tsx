"use client";
import {plans } from "@/Data/data.js";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypographyH3, TypographyP } from '@/Typography/Typography'
import Link from "next/link";
interface AvailablePlansProps {
  onContinue: () => void;
  onBack: () => void;
}

export default function AvailablePlans({
  onContinue,
  onBack,

}: AvailablePlansProps) {
  return (
    <div className="bg-white rounded-[32px] border shadow-sm p-10">
  
      <div className="mb-10">
        < TypographyH3 >
          Available plans
        </ TypographyH3>

        <TypographyP>
          Select the plan that best fits your needs and budget.
        </TypographyP>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative rounded-2xl border p-5 transition-all",
              plan.selected
                ? "border-[#4A3AFF] shadow-sm"
                : "border-gray-200"
            )}
          >
         
            <div
              className={cn(
                "absolute top-5 right-5 h-5 w-5 rounded-full border",
                plan.selected
                  ? "border-[#4A3AFF]"
                  : "border-gray-300"
              )}
            >
              {plan.selected && (
                <div className="h-3 w-3 rounded-full bg-[#4A3AFF] m-[3px]" />
              )}
            </div>

            <TypographyH3>
              {plan.title}
            </TypographyH3>

            <TypographyP>
              {plan.description}
            </TypographyP>

            
            <div className="flex gap-3 mt-5 flex-wrap">
              <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm">
                <Users size={14} />
                {plan.users}
              </span>

              <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm">
                <CalendarDays size={14} />
                {plan.billing}
              </span>
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-between mt-12">
        <Button
          variant="outline"
          className="h-14 min-w-[140px] rounded-xl"
          onClick={onBack}
        >
          Back
        </Button>

        <Button onClick={onContinue} className="h-14 min-w-[140px] rounded-xl bg-[#4A3AFF] hover:bg-[#3d2de0]">
          Continue
        </Button>
      </div>
    </div>
  );
}