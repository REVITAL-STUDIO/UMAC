import Image from "next/image";
import React from "react";
interface ThumbnailProps {
    url: string;
}

export default function Thumbnail({ url }: ThumbnailProps) {
    return (
        <Image
            src={url}
            width={170}
            height={170}
            alt="provider"
            className="rounded-[1rem]"
          />
    );
}

