"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-white p-4">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton
            showName
            appearance={{
              elements: { userButtonOuterIdentifier: "text-white" },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
