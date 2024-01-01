"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import EditFaqForm from "./EditFaqForm";

export default function NewFaqButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>New Reason</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <EditFaqForm oncancel={() => setOpen(false)} />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
