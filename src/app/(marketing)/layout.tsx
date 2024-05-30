import React from "react";
import Header from "./header";
import Footer from "./footer";

interface MarketingProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingProps) => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
