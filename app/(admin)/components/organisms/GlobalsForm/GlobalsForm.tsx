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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageInput } from "../../atoms/ImageInput";
import { GlobalTable, db } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { addGlobal, updateGlobal } from "@/app/lib/actions";
import { toast } from "react-toastify";

const formSchema = z.object({
  icon: z.string().default(""),
  description: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  x: z.string(),
  linkedin: z.string(),
  adress: z.string(),
  phone: z.string(),
  email: z.string(),
  getInTouchText: z.string(),
  lng: z.coerce.number(),
  lat: z.coerce.number(),

  //   Vision
  ourVisionTitle: z.string(),
  visionDescription: z.string(),
  missionDescription: z.string(),

  //   Hero section
  heroTitle: z.string(),
  heroDescription: z.string(),
  heroImage: z.string().default(""),

  //   Why Us
  whyUsTitle: z.string(),
  whyUsImage: z.string().default(""),
  whyUsDescription: z.string(),

  //   About Us
  aboutSectionTitle: z.string(),
  aboutSectionDescription: z.string(),
  aboutSectionImage: z.string().default(""),
  aboutTeamDescription: z.string(),

  //   Services
  serviceTitle: z.string(),
  servicesDescrption: z.string(),

  // How we work
  howWeWorkDescription: z.string().default(""),
  howWeWorkTitle: z.string(),
  howWeWorkImage: z.string().default(""),

  docsLink: z.string(),
  ctaTitle: z.string(),
  ctaDescription: z.string(),
  faqSectionTitle: z.string(),
  faqSectionDescription: z.string(),
});

type TFormData = z.infer<typeof formSchema>;

export default function GlobalsForm({
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
        await updateGlobal(data.id, payload);
      } else {
        await addGlobal(payload);
      }
      toast.success("Successfully");
      location.reload();
    } catch (error) {
      toast.error("Failed, try again");
    }
  }
  console.log(form.formState.errors);
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Hero section</h2>
            <FormField
              control={form.control}
              name="heroTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero title (Home page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heroDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero description (Home page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heroImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero image (4298 x 2838) :</FormLabel>
                  <FormControl>
                    <ImageInput onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Why us</h2>
            <FormField
              control={form.control}
              name="whyUsTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why us title (Home page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whyUsDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why us description (Home page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whyUsImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why us image (1279 x 836) :</FormLabel>
                  <FormControl>
                    <ImageInput onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">About us</h2>
            <FormField
              control={form.control}
              name="aboutSectionTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About us title (About page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutSectionDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About us description (About page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutSectionImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About us image (3494 x 2281) :</FormLabel>
                  <FormControl>
                    <ImageInput onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutTeamDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team description :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Services Page</h2>
            <FormField
              control={form.control}
              name="serviceTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service title (Service page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="servicesDescrption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service description (Service page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Our vision</h2>
            <FormField
              control={form.control}
              name="ourVisionTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Our vision title (About page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visionDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Our vision description (About page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="missionDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mission description :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">How we work</h2>
            <FormField
              control={form.control}
              name="howWeWorkTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How we work title (Home page) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="howWeWorkDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How we work description (Home page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="howWeWorkImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How we work image (470 x 570) :</FormLabel>
                  <FormControl>
                    <ImageInput onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="docsLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Getting staterd link(For the doc) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Social</h2>
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="x"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>x(Twitter) :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Contacts</h2>
            <FormField
              control={form.control}
              name="adress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adress :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lng"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitud :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Description & Get in touch</h2>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Footer description :</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="getInTouchText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Get in touch (contact page) :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ctaTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call to action title :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ctaDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call to action text :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="faqSectionTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FAQ Section title :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="faqSectionDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FAQ Section text :</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
