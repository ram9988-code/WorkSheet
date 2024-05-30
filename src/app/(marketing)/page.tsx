"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new languages with Worksheet
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                signInFallbackRedirectUrl={"/learn"}
                fallbackRedirectUrl={"/learn"}
              >
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                signUpFallbackRedirectUrl={"/learn"}
                fallbackRedirectUrl={"/learn"}
              >
                <Button
                  size={"lg"}
                  variant={"primaryOutline"}
                  className="w-full"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size={"lg"}
                variant={"secondary"}
                className="w-full"
                asChild
              >
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </main>
  );
}
