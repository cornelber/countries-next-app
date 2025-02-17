import { Button } from "@/shared/components";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { signIn } from "next-auth/react";
import React from "react";
import { LoginForm } from "./form/login-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        <DialogTitle>country.</DialogTitle>
        <LoginForm onClose={handleClose} />
        <hr />
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/about",
                redirect: true,
              })
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
