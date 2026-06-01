'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
interface PersonalInformationProps {
    onContinue: () => void;
}

export default function PersonalInformation({
    onContinue,
}: PersonalInformationProps) {
    return (
        <div className="w-full rounded-[30px] border bg-white p-12 shadow-sm">


            <h1 className="text-[42px] font-bold text-[#1E1B4B] mb-10">
                Personal information
            </h1>


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
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-3">
                        <label className="text-[20px] font-medium text-[#1E1B4B]">
                            Phone number<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            placeholder="(123) 000-0000"
                            className="h-16 rounded-2xl border border-[#E5E7EB] px-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
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
                    />
                </div>


                <div className="flex justify-end pt-10">
                    
                    <Button onClick={onContinue} className="h-16 px-10 rounded-2xl text-lg bg-violet-600 hover:bg-violet-700 shadow-lg">
                        Continue
                    </Button>
               
                </div>
            </form>
        </div>
    );
}