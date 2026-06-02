"use client";
import { TypographyH3 } from '@/Typography/Typography';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from 'react';

interface PersonalInformationProps {
    onContinue: () => void;
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

export default function PersonalInformation({
    onContinue,
    formData = defaultFormData,
    setFormData
}: PersonalInformationProps) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Safe handler to update form data
    const updateFormData = (field: string, value: string) => {
        if (setFormData && formData) {
            setFormData({ ...formData, [field]: value });
        }
    };

    // Don't render during SSR to avoid hydration issues
    if (!mounted) {
        return null;
    }

    const isDisabled = !formData?.fullName || !formData?.email || !formData?.phoneNumber || !formData?.address;

    return (
        <div className="w-full rounded-[30px] border bg-white p-5 md:p-12 shadow-sm flex flex-col gap-10">
            <TypographyH3>
                Personal information
            </TypographyH3>
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Full name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Exp. John Carter"
                            className="h-14 md:h-16 rounded-2xl border border-[#E5E7EB] px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData?.fullName || ''}
                            onChange={(e) => updateFormData('fullName', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-14 md:h-16 rounded-2xl border border-[#E5E7EB] px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData?.email || ''}
                            onChange={(e) => updateFormData('email', e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="(123) 000-0000"
                            className="h-14 md:h-16 rounded-2xl border border-[#E5E7EB] px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData?.phoneNumber || ''}
                            onChange={(e) => updateFormData('phoneNumber', e.target.value.replace(/\D/g, "").slice(0, 10))}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Company
                        </label>
                        <input
                            type="text"
                            placeholder="Exp. Company"
                            className="h-14 md:h-16 rounded-2xl border border-[#E5E7EB] px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2 focus:ring-violet-500"
                            value={formData?.company || ''}
                            onChange={(e) => updateFormData('company', e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                        Address<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Exp. San Francisco, CA"
                        className="h-14 md:h-16 rounded-2xl border border-[#E5E7EB] px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2 focus:ring-violet-500"
                        value={formData?.address || ''}
                        onChange={(e) => updateFormData('address', e.target.value)}
                    />
                </div>

                <div className="flex justify-end pt-10">
                    <Button
                        onClick={onContinue}
                        type="button"
                        disabled={isDisabled}
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