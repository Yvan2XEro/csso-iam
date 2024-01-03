"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImageInput } from "../../atoms/ImageInput";
import { addBanners, updateBanners } from "@/app/lib/actions";
import { toast } from "react-toastify";

const formSchema = z.object({
  about: z.string().default(""),
  service: z.string().default(""),
  contact: z.string().default(""),
  blog: z.string().default(""),
  team: z.string().default(""),
});

type TFormData = z.infer<typeof formSchema>;

export default function BannersForm({
  data,
}: {
  data: (TFormData & { id: string }) | null;
}) {
  const form = useForm<TFormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
    values: data || undefined,
  });

  async function submit(payload: TFormData) {
    console.log("hjkl");
    try {
      if (!!data?.id) {
        await updateBanners(data.id, payload);
      } else {
        await addBanners(payload);
      }
      toast.success("Successfully");
      location.reload();
    } catch (error) {
      toast.error("Failed, try again");
    }
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services page (1920 x 587) :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About page (1920 x 587) :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact page (1920 x 587) :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="blog"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog page (1920 x 587) :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="team"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team page (1920 x 587) :</FormLabel>
                <FormControl>
                  <ImageInput onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
