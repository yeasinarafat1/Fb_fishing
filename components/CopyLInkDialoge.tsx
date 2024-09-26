import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Input } from "./ui/input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

const CopyLInkDialoge = ({
  open,
  setOpen,
  link,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Success </DialogTitle>
          <DialogDescription>
            Copy this link and share with your friends
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex items-center gap-2">
          <Input value={link} disabled className="flex-1 " />
          <CopyToClipboard text={link}>
            <Copy />
          </CopyToClipboard>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CopyLInkDialoge;
