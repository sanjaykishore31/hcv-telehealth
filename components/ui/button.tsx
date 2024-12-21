'use client';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        "px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90",
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
}