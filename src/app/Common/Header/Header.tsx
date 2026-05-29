import Image from "next/image";
import ShadowBox from "@/Shadowbox/Shadowbox";
import { TypographyH3 } from "@/Typography/Typography";

export default function Header() {
  return (
    <ShadowBox className="flex items-center gap-5 my-5">
      <Image
        src="/header/chartLine.png"
        alt="header"
        width={56}
        height={56}
      />
   <div className="border border-gray-200 rounded-full bg-[#F1F2F9] p-3">
      <TypographyH3>
        Multi-step Form
      </TypographyH3>
      </div>
    </ShadowBox>
  );
}