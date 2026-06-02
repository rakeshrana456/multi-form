"use client";
import { Button } from "@/components/ui/button";
// import {X}from "lucid/react"
import { servicesSelected } from "@/Data/data.js";
import { successData } from "@/Data/data.js";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TypographyH3 , TypographyP} from "@/Typography/Typography";
interface ActiveAccountProps {
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
        ActiveAccount: string;
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
            ActiveAccount: string;
        }>
    >;
}
export default function ActiveAccount({
    onBack,
    onContinue,
    formData,
    setFormData
}: ActiveAccountProps) {

    const [showPopup, setShowPopup] = useState(false);

    const handleFinish = () => {
        localStorage.setItem("userFormData", JSON.stringify(formData));
        console.log("Data saved to localStorage:", formData);  
        setShowPopup(true);
    };
    useEffect(()=>{
        setShowPopup(false);

    },[])

    const handleClosePopup = () => {
        setShowPopup(false);
        onContinue();
    };

    return (
        <>
            <div className="rounded-[32px] border bg-white p-10 shadow-sm">
               { showPopup && (
                    <div className="mb-10">
                        <TypographyH3  >
                            {successData.title}
                        </TypographyH3>
                        <TypographyP >
                            {successData.description}
                        </TypographyP>
                    </div>)}
                <div className=" grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {servicesSelected.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                onClick={() =>
                                    setFormData({
                                        ...formData,                                    
                                        ActiveAccount: service.title
                                    })
                                }
                                className={cn(
                                    "rounded-2xl border p-8 cursor-pointer transition-all",
                                  service.title === formData?.ActiveAccount
                                        ? "border-[#4A3AFF]"
                                        : "border-gray-200"
                                )}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F3FF] shadow-sm">
                                        <Icon
                                            size={30}
                                            className="text-[#4A3AFF]"
                                        />
                                    </div>
                                    <TypographyH3 >
                                    {service.title}
                                    </TypographyH3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-12 flex justify-between items-center gap-3">
                    <Button
                        variant="outline"
                        className="h-14 min-w-35 rounded-xl"
                        onClick={onBack}
                    >
                        Back
                    </Button>
                    <Button
                        disabled={!formData?.ActiveAccount}
                        onClick={handleFinish}
                        className="
                            h-14 w-36 rounded-xl
                            bg-[#4A3AFF]
                            hover:bg-[#3D2FFF]
                            disabled:bg-gray-500
                            disabled:cursor-not-allowed cursor-pointer
                        "
                    >
                        {successData.buttonText}
                    </Button>
                </div>
            </div>

            
            {/* {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative mx-4 w-full max-w-md animate-in fade-in zoom-in duration-300">
                        <div className="rounded-2xl border bg-white p-8 shadow-2xl">
                           
                            <button
                                onClick={handleClosePopup}
                                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                            >
                                
                            </button>

                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-green-100 p-3">
                                        <svg
                                            className="h-8 w-8 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <TypographyH3 >
                                    {successData.title}
                                </TypographyH3>
                                <p className="mb-6 text-gray-600">
                                    {successData.description}
                                </p>
                                
                               
                                <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
                                    <p className="text-sm font-semibold text-gray-700">Summary:</p>
                                    <p className="text-sm text-gray-600">Name: {formData.fullName}</p>
                                    <p className="text-sm text-gray-600">Email: {formData.email}</p>
                                    <p className="text-sm text-gray-600">Plan: {formData.selectedPlan}</p>
                                    <p className="text-sm text-gray-600">Service: {formData.selectedService}</p>
                                </div>

                                <Button
                                    onClick={handleClosePopup}
                                    className="w-full rounded-xl bg-[#4A3AFF] py-3 text-white hover:bg-[#3D2FFF]"
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </>
    );
}