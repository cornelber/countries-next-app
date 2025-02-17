import React from "react";
import { Button } from "../ui";
import { MoonIcon } from "lucide-react";

interface Props {
  onClickToggleTheme?: () => void;
  className?: string;
}

export const ThemeButton: React.FC<Props> = ({
  className,
  onClickToggleTheme,
}) => {
  return (
    <div className={className}>
      <Button onClick={onClickToggleTheme}>
        <MoonIcon />
      </Button>
    </div>
  );
};
