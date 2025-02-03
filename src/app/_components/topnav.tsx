import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white p-4">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
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
