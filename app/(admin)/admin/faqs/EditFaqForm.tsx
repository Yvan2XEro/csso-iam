"use client";
import { addFaqs, updateFaqs } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaqTable, db } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { eq } from "drizzle-orm";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

const formSchema = z.object({
  question: z.string(),
  response: z.string(),
});

type TFormData = z.infer<typeof formSchema>;

type TProps = {
  data?: TFormData;
  id?: string;
  oncancel: () => void;
};
export default function EditFaqForm({ data, id, oncancel }: TProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    values: data || undefined,
  });

  async function submit(payload: TFormData) {
    try {
      if (!!id) {
        await updateFaqs(id, payload);
      } else {
        await addFaqs(payload);
      }
      toast.success("Successfully");
      location.reload();
    } catch (error) {
      toast.error("Failed, try again");
    }
  }
  return (
    <div className=" w-full ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          method="post"
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question :</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="response"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Answer:</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Button type="button" onClick={() => oncancel()}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
