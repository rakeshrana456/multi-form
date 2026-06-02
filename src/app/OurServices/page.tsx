"use client";
import { useState, useEffect } from "react";
import { services } from "@/Data/data.js";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TypographyH3, TypographyP } from "@/Typography/Typography";

interface OurServiceProps {
  onContinue: () => void;
  onBack: () => void;
  formData?: {
    fullName: string;
    email: string;
    phoneNumber: string;
    company: string;
    address: string;
    selectedPlan: string;
    selectedService: string;
    ActiveAccount: string;
  };
  setFormData?: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phoneNumber: string;
      company: string;
      address: string;
      selectedPlan: string;
      selectedService: string;
      ActiveAccount: string;
    }>
  >;
}

const defaultFormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  company: '',
  address: '',
  selectedPlan: '',
  selectedService: '',
  ActiveAccount: '',
};

export default function OurService({
  onContinue,
  onBack,
  formData = defaultFormData,
  setFormData,
}: OurServiceProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleServiceSelect = (serviceTitle: string) => {
    if (setFormData && formData) {
      setFormData({
        ...formData,
        selectedService: serviceTitle,
      });
    }
  };
  if (!mounted) {
    return null;
  }
  const selectedService = formData?.selectedService || '';
  return (
    <div className="rounded-[32px] border bg-white p-10 shadow-sm">
      <div className="mb-10">
        <TypographyH3>
          Our Service
        </TypographyH3>
        <TypographyP>
          Select the service that best fits your needs and budget.
        </TypographyP>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.title)}
              className={cn(
                "cursor-pointer rounded-2xl border p-8 transition-all",
                selectedService === service.title
                  ? "border-[#4A3AFF]"
                  : "border-gray-200"
              )}
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F3FF] shadow-sm">
                  <Icon size={30} className="text-[#4A3AFF]"/>
                </div>
                <TypographyH3>
                  {service.title}
                </TypographyH3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-between gap-3">
        <Button
          variant="outline"
          className="h-14 w-36 rounded-xl"
          onClick={onBack}
        >
          Back
        </Button>

        <Button
          onClick={onContinue}
          disabled={!selectedService}
          className="h-14 w-36 rounded-xl bg-[#4A3AFF] hover:bg-[#3D2FFF] disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}