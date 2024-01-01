"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import EditFaqForm from "./EditFaqForm";
import { deleteFaqs, deleteMembers } from "@/app/lib/actions";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type TProps = {
  faq: {
    id: string;
    description: string;
    title: string;
    image: string;
  };
};
export default function FaqCard({ faq }: TProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="p-2">
      <CardHeader>
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage alt={faq.title} src={faq.image} />
          </Avatar>
          <CardTitle>{faq.title}</CardTitle>
        </div>
      </CardHeader>
      <div>
        <p>{faq.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button>Edit</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <EditFaqForm
                data={{
                  title: faq.title,
                  description: faq.description,
                  image: faq.image,
                }}
                id={faq.id}
                oncancel={() => setOpen(false)}
              />
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          variant="destructive"
          onClick={async () => {
            await deleteMembers(faq.id);
            location.reload();
          }}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
