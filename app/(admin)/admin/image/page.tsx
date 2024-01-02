"use client";
import React, { useState } from "react";
import { ImageInput } from "../../components/atoms/ImageInput";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [url, setUrl] = useState("");
  return (
    <div className="flex flex-col gap-3 w-80 mt-4">
      <h2>
        Upload image and get url(330 x 200 for posts articles and 1920 x 587 for
        banners)
      </h2>
      <ImageInput value={url} onChange={setUrl} />

      <Input value={url} />
    </div>
  );
}
