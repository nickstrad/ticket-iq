"use client";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <Button type="button" onClick={() => addUser()}>
            Add
          </Button>
          {JSON.stringify(users, null, 2)}
        </div>
      </Authenticated>
      <Unauthenticated>
        Must be signed in! <SignInButton>Sign In</SignInButton>
      </Unauthenticated>
    </>
  );
}
