import React from "react";

interface StickyWrapperProps {
  children: React.ReactNode;
}

const StickyWrapper = ({ children }: StickyWrapperProps) => {
  return (
    <div className="hidden lg:block w-[368px] sticky self-end bottom-6">
      <div className="min-h-[calc(100vh-48px)] pt-[20px] pb-3 mb-5 sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
