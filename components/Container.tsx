import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div 
      id={id}
      className={`w-full max-w-[1440px] mx-auto px-4 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
