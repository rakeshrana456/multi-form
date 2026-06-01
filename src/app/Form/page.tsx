'use client'
import { TypographyH3 } from '@/Typography/Typography'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from 'react';

interface PersonalInformationProps {
    onContinue: () => void;
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
export default function PersonalInformation({
    onContinue,
    formData,
    setFormData
}: PersonalInformationProps) {

    return (
        <div className="w-full rounded-[30px] border bg-white p-12 shadow-sm">
            <TypographyH3>
                Personal information
            </TypographyH3>
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="text-[20px] font-medium text-[#1E1B4B]">
                            Full name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Exp. John Carter"
                            className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-[20px] font-medium text-[#1E1B4B]">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="text-[20px] font-medium text-[#1E1B4B]">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="(123) 000-0000"
                            className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData,phoneNumber: e.target.value.replace(/\D/g, "").slice(0, 10), })
                        }
                            
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-[20px] font-medium text-[#1E1B4B]">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Exp. Company"
                            className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-3">
                    <label className="text-[20px] font-medium text-[#1E1B4B]">
                        Address<span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Exp. San Francisco, CA"
                        className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>


                <div className="flex justify-end pt-10">
                    <Button
                        onClick={onContinue}
                        type="button"
                        disabled={
                            !formData.fullName ||
                            !formData.email ||
                            !formData.phoneNumber ||
                            !formData.address
                        }
                        className="
    h-14 w-36 rounded-xl
    bg-[#4A3AFF] hover:bg-[#3D2FFF]
    disabled:bg-gray-500
    disabled:text-white
    disabled:cursor-not-allowed
  "
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
}