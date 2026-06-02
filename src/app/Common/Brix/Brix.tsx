"use client"
import React from 'react'
import ShadowBox from '@/Shadowbox/Shadowbox'
import Image from 'next/image'
import { TypographyH3, TypographyP } from '@/Typography/Typography'
import { Button } from "@/components/ui/button"
import { SideData } from "@/Data/data.js"
import { Headphones } from "lucide-react";
import PersonalInformation from '@/app/Form/page'
import AvailablePlans from '@/app/AvailablePlan/page'
import OurService from '@/app/OurServices/page'
import ActiveAccount from '@/app/ActiveAccount/page'
import { useState, useEffect } from 'react'
interface sideData {
  id: number
  title: string,
  description: string
  active: boolean
}
export default function Brix() {
  const [step, setStep] = useState(1);
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    address: '',
    selectedPlan: '',
    selectedService: '',
    ActiveAccount: '',
  });




  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Saved to localStorage:", formData);
  }, [formData]);



  // useEffect(() => {
  //   if (!isInitialLoad) {
  //     localStorage.setItem("formData", JSON.stringify(formData));
  //     console.log("Saved to localStorage:", formData);
  //   }
  // }, [formData, isInitialLoad]);



  return (
    <>
      <ShadowBox>
        <div className="mainContainer min-h-full lg:grid lg:grid-cols-[330px_1fr] gap-8 flex flex-col lg:flex-row">
          <div className="leftContainer h-auto bg-[#F1F0FB] border border-gray-200 rounded-md ">
            <div>
              <div className='flex gap-2 p-7 justify-center items-center'>
                <Image height={22} width={22} alt='logo' src="/hero/logo.png" />
                <TypographyH3>brix templates </TypographyH3>
              </div>
            </div>
            {
              SideData.map((data: sideData, index) => (
                <div key={index} className="flex gap-5 p-7 min-h-[120px]">
                  <div className="flex flex-col items-center">
                    <Button
                      variant={step === data.id ? "default" : "outline"}
                      className={step === data.id ? "bg-[#4A3AFF] text-white" : ""}
                    >
                      {data.id}
                    </Button>
                    {index !== SideData.length - 1 && (
                      <div className="mt-2 h-6 w-[4px] bg-gray-300 rounded overflow-hidden">
                        <div
                          className={`w-full bg-[#4A3AFF] transition-all duration-[900ms] ease-linear ${step > data.id ? "h-full" : "h-0"
                            }`}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <TypographyH3>
                      {data.title}
                    </TypographyH3>
                    <TypographyP >
                      {data.description}
                    </TypographyP>
                  </div>
                </div>
              ))
            }
            <div className='flex justify-between items-center p-6 my-7'>
              <div>
                <TypographyH3>Need a help?</TypographyH3>
                <span>
                  <TypographyP>chat with live support</TypographyP>
                </span>
              </div>
              <div>
                <Headphones />
              </div>
            </div>

          </div>
          <div className="rightContainer flex justify-center items-center ">
            {step === 1 && <PersonalInformation onContinue={() => setStep(2)} formData={formData} setFormData={setFormData} />}
            {step === 2 && <AvailablePlans onContinue={() => setStep(3)} onBack={() => setStep(1)} formData={formData} setFormData={setFormData} />}
            {step === 3 && <OurService onContinue={() => setStep(4)} onBack={() => setStep(2)} formData={formData} setFormData={setFormData} />}
            {step === 4 && <ActiveAccount onContinue={() => setStep(5)} onBack={() => setStep(3)} formData={formData} setFormData={setFormData} />}
          </div>

        </div>

      </ShadowBox>

    </>
  )
}
