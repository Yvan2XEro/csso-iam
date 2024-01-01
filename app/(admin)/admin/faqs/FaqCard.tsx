"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import EditFaqForm from "./EditFaqForm";
import { deleteFaqs } from "@/app/lib/actions";

type TProps = {
  faq: {
    id: string;
    question: string;
    response: string;
  };
};
export default function FaqCard({ faq }: TProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="p-2">
      <CardHeader>
        <CardTitle>{faq.question}</CardTitle>
      </CardHeader>
      <div>
        <p>{faq.response}</p>
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
                  question: faq.question,
                  response: faq.response,
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
            await deleteFaqs(faq.id);
            location.reload();
          }}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
