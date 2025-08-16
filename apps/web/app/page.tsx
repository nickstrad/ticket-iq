"use client";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>apps/web</p>
      <Button type="button" onClick={() => addUser()}>
        Add
      </Button>
      {JSON.stringify(users, null, 2)}
    </div>
  );
}
