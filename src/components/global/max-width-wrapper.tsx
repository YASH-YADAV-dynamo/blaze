import { cn } from "@/utils";
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full max-w-full md:max-w-screen-2xl px-10 md:px-12 lg:px-24",
            className,
        )}>
            {children}
        </section>
    )
};

export default MaxWidthWrapper