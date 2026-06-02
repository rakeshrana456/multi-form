"use client";
import { TypographyH3 } from '@/Typography/Typography';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
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
export default function PersonalInformation({
    onContinue,
    formData,
    setFormData
}: PersonalInformationProps) {

    const updateFormData = (field: string, value: string) => {
        if (setFormData && formData) {
            setFormData({ ...formData, [field]: value });
        }
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };
    const [emailError, setEmailError] = useState("");
    const isDisabled = !formData?.fullName || !formData?.email || formData?.phoneNumber.length !== 10 || !formData?.address || emailError !== "";
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
                            value={formData?.fullName || ""}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                                updateFormData("fullName", value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`h-14 md:h-16 rounded-2xl border px-4 md:px-5 text-base md:text-lg outline-none focus:ring-2
                          ${emailError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-[#E5E7EB] focus:ring-violet-500"
                                }`}
                            value={formData?.email || ""}
                            onChange={(e) => {
                                updateFormData("email", e.target.value);
                                validateEmail(e.target.value);
                            }}
                        />
                        {emailError && (
                            <p className="text-sm text-red-500">
                                {emailError}
                            </p>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="text-base md:text-[20px] font-medium text-[#1E1B4B]">
                            Phone number <span className="text-red-500">*</span>
                        </label>

                        <div className="flex items-center h-14 md:h-16 rounded-2xl border border-[#E5E7EB] focus-within:ring-2 focus-within:ring-violet-500">
                            <span className="px-4 text-gray-600 border-r">+91</span>

                            <input
                                type="tel"
                                placeholder="9876543210"
                                className="flex-1 px-4 outline-none"
                                value={formData?.phoneNumber || ""}
                                onChange={(e) =>
                                    updateFormData(
                                        "phoneNumber",
                                        e.target.value.replace(/\D/g, "").slice(0, 10)
                                    )
                                }
                            />
                        </div>
                        
                        {formData?.phoneNumber.length !== 10 && (
                            <p className="text-sm text-red-500">
                                Please enter a valid 10-digit phone number
                            </p>
                        )}
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
                        className=" cursor-pointer
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