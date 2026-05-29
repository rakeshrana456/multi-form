import { cn } from "@/lib/utils";

interface ShadowBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShadowBox({
  children,
  className,
}: ShadowBoxProps) {
  return (
    <div
     className={cn(
  "max-w-368.75 w-full mx-auto rounded-2xl bg-white p-6 shadow-[0_0_30px_rgba(0,0,0,0.15)]",
  className
)}
    >
      {children}
    </div>
  );
}