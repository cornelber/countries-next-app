import React from "react";
import { Button } from "../ui";
import { LogIn } from "lucide-react";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const LoginButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  return (
    <div className={className}>
      <Button onClick={onClickSignIn} variant={"outline"} className="text-sm">
        <LogIn />
        Get Started
      </Button>
    </div>
  );
};
