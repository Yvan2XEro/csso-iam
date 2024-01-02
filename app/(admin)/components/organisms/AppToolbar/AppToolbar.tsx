import React from "react";

type TProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AppToolbar(props: TProps) {
  const { setIsOpen } = props;
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center"></div>
    </div>
  );
}
