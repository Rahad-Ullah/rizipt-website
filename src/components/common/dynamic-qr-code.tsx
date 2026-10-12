"use client";

import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import { DEFAULT_APP_LINKS } from "@/lib/app-links";
import { cn } from "@/lib/utils";

interface DynamicQRCodeProps {
  url?: string;
  size?: number;
  className?: string;
}

export function DynamicQRCode({
  url,
  size = 150,
  className,
}: DynamicQRCodeProps) {
  const [downloadUrl, setDownloadUrl] = React.useState<string>(
    url || `${DEFAULT_APP_LINKS.siteUrl}/download`
  );

  React.useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setDownloadUrl(`${window.location.origin}/download`);
    }
  }, [url]);

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white p-3 shadow-md flex items-center justify-center select-none",
        className
      )}
    >
      <QRCodeSVG
        value={downloadUrl}
        size={size}
        level="H"
        bgColor="#ffffff"
        fgColor="#0f172a"
        marginSize={1}
        imageSettings={{
          src: "/logo.png",
          height: Math.round(size * 0.22),
          width: Math.round(size * 0.22),
          excavate: true,
        }}
      />
    </div>
  );
}
