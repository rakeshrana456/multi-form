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
import { useState } from 'react'
interface sideData {
  id: number
  title: string,
  description: string
  active: boolean
}
export default function Brix() {
  const [step, setStep] = useState(1);
  return (
    <>
      <ShadowBox>
        <div className="mainContainer grid grid-cols-2">
          <div className="leftContainer h-auto w-87 bg-[#F1F0FB] border border-gray-200 rounded-md">
            <div>
              <div className='flex gap-2 p-7 justify-center items-center'>
                <Image height={22} width={22} alt='logo' src="/hero/logo.png" />
                <TypographyH3>brix templates </TypographyH3>
              </div>
            </div>
            {
              SideData.map((data: sideData, index) => (
                <div key={index} className="flex gap-5 p-7">
                  <div className="flex flex-col items-center">
                    {
                      <Button
                        key={data.id}
                        className={
                          step === data.id
                            ? "bg-[#4A3AFF] text-white"
                            : ""
                        }
                        variant={step === data.id ? "default" : "outline"}
                      >
                        {data.id}
                      </Button>
                    }
                    {
                      index !== SideData.length - 1 && (
                        <span
                          className={`mt-10 h-14 w-1 rounded transition-all duration-2000 ${step > data.id
                              ? "bg-[#4A3AFF]"
                              : "bg-gray-300"
                            }`}
                        />
                      )
                    }
                  </div>
                  <div>
                    <TypographyH3>
                      {data.title}
                    </TypographyH3>

                    <TypographyP>
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
          <div className="rightContainer w-full">
            {step === 1 && <PersonalInformation onContinue={() => setStep(2)} />}
            {step === 2 && <AvailablePlans onContinue={() => setStep(3)} />}
            {step === 3 && <OurService onContinue={() => setStep(4)} />}
            {step === 4 && <ActiveAccount onContinue={() => setStep(5)} />}
          </div>

        </div>

      </ShadowBox>

    </>
  )
}
