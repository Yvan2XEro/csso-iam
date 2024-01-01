"use client";
import {
  addMembers,
  addreasons,
  updateMembers,
  updatereasons,
} from "@/app/lib/actions";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ImageInput } from "../../components/atoms/ImageInput";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().default(""),
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
        await updatereasons(id, payload);
      } else {
        await addreasons(payload);
      }
      location.reload();
    } catch (error) {
      alert(error);
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name :</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrption:</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    onChange={field.onChange}
                    value={field.value}
                  />
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
