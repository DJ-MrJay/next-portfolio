import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-7xl mx-auto ", className)}
      {...props}
    >
      {children}
    </div>
  );
}
