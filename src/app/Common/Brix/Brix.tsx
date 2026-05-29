import React from 'react'
import ShadowBox from '@/Shadowbox/Shadowbox'
import Image from 'next/image'
import { TypographyH3,TypographyP } from '@/Typography/Typography'
import { Button } from "@/components/ui/button"
import { SideData } from "@/Data/data.js"
import { Headphones } from "lucide-react";
interface sideData {
  id: number
  title: string,
  description: string
  active: boolean
}
export default function Brix() {
  return (
    <>
      <ShadowBox>
        <div className="mainContainer">
          <div className="leftContainer h-186.5 w-87 bg-[#F1F0FB] border border-gray-200 rounded-md">
            <div>
              <div className='flex gap-2 p-7 justify-center items-center'>
                <Image height={22} width={22} alt='logo' src="/hero/logo.png" />
                <TypographyH3>brix templates </TypographyH3>
              </div>
            </div>

            {
              SideData.map((data: sideData, index) => (
                <div key={index} className='flex p-7 gap-3 '>
                  {
                    data.active ? (
                      <Button className="bg-[#4A3AFF] text-white">
                        {data.id}
                      </Button>
                    ) : (
                      <Button variant="outline">
                        {data.id}
                      </Button>
                    )
                  }

                  <div><TypographyH3>{data.title}</TypographyH3> <span><TypographyP>{data.description}</TypographyP></span></div>

                </div>

              ))

            }
            <div className='flex justify-between items-center p-6 my-7'>
              <div>
                <TypographyH3>Need a help?</TypographyH3>
                <span><TypographyP>chat with live support</TypographyP></span>

              </div>
              <div>
                <Headphones />
              </div>
            </div>

          </div>
          <div className="rightContainer"></div>

        </div>

      </ShadowBox>

    </>
  )
}
