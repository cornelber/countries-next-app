"use client"

import React, { useState } from "react";
import { Button } from "@/shared/components";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { signIn } from "next-auth/react";
import { LoginForm } from "./form/login-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleGitHubLogin = async () => {
    setLoading(true); 
    try {
      const res = await signIn("github", {
        callbackUrl: "/dashboard",
        redirect: true,
      });

      if (!res?.ok) {
        throw new Error("Failed to sign in with GitHub");
      }
    } catch (error) {
      console.error("Error during GitHub sign-in", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        <DialogTitle>country.</DialogTitle>
        <LoginForm onClose={handleClose} />
        <hr />
        <div className="flex gap-4 items-center">
          <Button
            loading={loading}
            variant="outline"
            onClick={(handleGitHubLogin)
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
