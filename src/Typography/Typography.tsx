import { inter } from "@/lib/fonts";

interface TypographyH3Props {
  children: React.ReactNode;
}
interface TypographyPProps {
  children: React.ReactNode;
}

export function TypographyH3({
  children,
}: TypographyH3Props) {
  return (
    <h3
      className={`${inter.className} scroll-m-20 text-lg font-semibold tracking-tight`}
    >
      {children}
    </h3>
  );
}
export function TypographyP({
  children,
}: TypographyPProps) {
  return (
    <p
      className={`${inter.className} leading-7 text-[14px] text-muted-foreground`}
    >
      {children}
    </p>
  );
}