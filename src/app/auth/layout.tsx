import { MaxWidthWrapper } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <MaxWidthWrapper>
            <Toaster richColors theme="dark" position="top-right" />
            <div className="flex w-full left-0 h-screen overflow-hidden">
                <div className="hidden md:block w-[728px] h-screen bg-cover bg-center bg-no-repeat flex-shrink-0" style={{ backgroundImage: `url('/bg.png')`, marginLeft: 0 }} />
                <div className="hidden md:block w-[235px] h-screen bg-cover bg-center bg-no-repeat flex-shrink-0" style={{ backgroundImage: `url('/bgtint.png')` }} />
                <div className="flex-1 pl-1 flex items-center justify-center overflow-hidden">
                    <main className="w-full max-w-xl relative z-1 flex items-center justify-center overflow-hidden">
                        <div className="w-full max-w-xl px-4">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default MarketingLayout;