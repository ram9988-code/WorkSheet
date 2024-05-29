import React from "react";

interface MarketingProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingProps) => {
  return (
    <div className="min-h-full flex flex-col">
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
