import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

interface UserProgressProps {
  activeProgress: { title: string; imageSrc: string };
  hearts: number;
  points: number;
  hasAciveSubscription: boolean;
}

const UserProgress = ({
  activeProgress,
  hasAciveSubscription,
  hearts,
  points,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeProgress.imageSrc}
            alt={activeProgress.title}
            height={32}
            width={32}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-yellow-500">
          <Image
            src={"/point.svg"}
            alt="Points"
            height={24}
            width={24}
            className="mr-2 "
          />
          {points}
        </Button>
      </Link>
      <Link href={"/"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src={"/heart.svg"}
            alt="Hearts"
            height={24}
            width={24}
            className="mr-2 "
          />
          {hasAciveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
