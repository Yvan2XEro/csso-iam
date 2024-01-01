"use client";

import { uploadFile } from "@/app/lib/actions";
import React, { useState } from "react";

type TProps = {
  value?: string;
  onChange?: (value: string) => void;
};
export default function ImageInput({ onChange, value }: TProps) {
  const [uploading, setuploading] = useState(false);
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const fd = new FormData();
          fd.append("file", file);
          setuploading(true);
          const url = await uploadFile(fd);
          onChange?.(url);
          setuploading(false);
        }}
      />
      {uploading && <div>Uploading...</div>}
      {!uploading && !!value && value.length > 5 && (
        <img className="h-32 w-32" src={value} alt="image" />
      )}
    </div>
  );
}
