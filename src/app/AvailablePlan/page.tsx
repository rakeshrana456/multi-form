"use client";
import { plans } from "@/Data/data.js";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypographyH3, TypographyP } from '@/Typography/Typography'
import Link from "next/link";
import { useState } from "react";

interface AvailablePlansProps {
  onContinue: () => void;
  onBack: () => void;
  formData: {
    fullName: string;
    email: string;
    phoneNumber: string;
    company: string;
    address: string;
    selectedPlan: string;
    selectedService: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phoneNumber: string;
      company: string;
      address: string;
      selectedPlan: string;
      selectedService: string;
    }>
  >;
}

export default function AvailablePlans({
  onContinue,
  onBack,
  formData,
  setFormData,

}: AvailablePlansProps) {

  return (
    <div className="bg-white rounded-[32px] border shadow-sm p-10 lg:p-0 md:p-10">

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
            onClick={() =>
              setFormData({
                ...formData,
                selectedPlan: plan.title,
              })
            }
            className={cn(
              "relative rounded-2xl border p-5 transition-all cursor-pointer",
              formData.selectedPlan === plan.title
                ? "border-[#4A3AFF] shadow-sm"
                : "border-gray-200"
            )}
          >

            <div
              className={cn(
                "absolute top-5 right-5 h-5 w-5 rounded-full border flex items-center justify-center",
                formData.selectedPlan === plan.title
                  ? "border-[#4A3AFF]"
                  : "border-gray-300"
              )}
            >
              {formData.selectedPlan === plan.title && (
                <div className="h-3 w-3 rounded-full bg-[#4A3AFF] m-[3px]`" />
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
                <TypographyP>
                  {plan.users}
                </TypographyP>
              </span>

              <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm">
                <CalendarDays size={14} />
                <TypographyP>
                  {plan.billing}
                </TypographyP>
              </span>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-between mt-12 gap-3">
        <Button
          variant="outline"
          className="h-14 min-w-35 rounded-xl cursor-pointer"
          onClick={onBack}
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={onContinue}
          disabled={!formData.selectedPlan}
          className="
    h-14 min-w-35 rounded-xl
    cursor-pointer
    bg-[#4A3AFF]
    hover:bg-[#3d2de0]
    disabled:bg-gray-400
    disabled:hover:bg-gray-400
    disabled:cursor-not-allowed
  "
        >
          Continue
        </Button>
      </div>
    </div>
  );
}