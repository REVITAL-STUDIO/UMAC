import Image from "next/image";

interface ThumbnailProps {
  url: string;
  alt?: string;
}

export default function Thumbnail({ url, alt = "provider" }: ThumbnailProps) {
  return (
    <div
      className="relative w-[170px] h-[170px] rounded-2xl overflow-hidden flex-shrink-0
      shadow-[0_2px_12px_rgba(0,0,0,0.07)] border border-neutral-100
      group transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:border-neutral-200"
    >
      <Image
        src={url}
        fill
        alt={alt}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}
