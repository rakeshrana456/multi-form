import { Button } from "@/components/ui/button";
import { services } from "@/Data/data.js";
import { successData } from "@/Data/data.js";
import { cn } from "@/lib/utils";
interface ActiveAccountProps {
  onContinue: () => void;
}

export default function ActiveAccount({
  onContinue,
}: ActiveAccountProps)  

 {
    return (
        <div className="rounded-[32px] border bg-white p-10 shadow-sm">
            <div className="mb-10">
                <h1 className="text-[48px] font-bold text-[#1E1B4B]">
                    {successData.title}
                </h1>
                <p className="mt-2 text-lg text-[#6B7280]">
                    {successData.description}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.id}
                            className={cn(
                                "rounded-2xl border p-8",
                                service.id === successData.selectedServiceId
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
                                <h3
                                    className={cn(
                                        "text-lg",
                                        service.id === successData.selectedServiceId
                                            ? "font-semibold text-[#1E1B4B]"
                                            : "text-[#6B7280]"
                                    )}
                                >
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-12 flex justify-end">
                <Button onClick={onContinue} className="h-14 w-36 rounded-xl bg-[#4A3AFF] hover:bg-[#3D2FFF]">
                    {successData.buttonText}
                </Button>
            </div>
        </div>
    );
}