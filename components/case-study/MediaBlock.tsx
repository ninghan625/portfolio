import Image from "next/image";
import { MediaBlockData } from "./types";

interface MediaBlockProps {
  media: MediaBlockData;
  className?: string;
}

export default function MediaBlock({ media, className = "" }: MediaBlockProps) {
  // Only show caption if it's not the default placeholder
  const showCaption = media.caption && media.caption !== "Media Caption";
  
  // Strip query strings from image src (e.g., ?v=timestamp for cache busting)
  const cleanImageSrc = media.src ? media.src.split('?')[0] : '';
  
  return (
    <div className={`flex w-full flex-col gap-[8px] ${className}`}>
      {media.type === "image" && cleanImageSrc ? (
        <div className="w-full rounded-[4px] overflow-hidden">
          <Image
            src={cleanImageSrc}
            alt={media.caption}
            width={1200}
            height={800}
            className="w-full h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full rounded-[4px] bg-[#f5f5f5]" />
      )}
      {showCaption && (
        <p className="w-full text-center text-[14px] leading-normal text-[#86909c]">
          {media.caption}
        </p>
      )}
    </div>
  );
}
