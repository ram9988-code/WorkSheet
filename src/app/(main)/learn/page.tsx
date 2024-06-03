import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import UserProgress from "@/components/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Search" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeProgress={{ title: "Hindi", imageSrc: "/flags/IN.svg" }}
          hasAciveSubscription={false}
          hearts={5}
          points={100}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
