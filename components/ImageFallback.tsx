"use client";
import { useState } from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";

function ImageFallback({src, ...rest}: ImageProps) {
	const [defaultSrc, setSrc] = useState(src || '');

	function handleOnError() {
		setSrc("/placeholder-image.png");
  }

  return <Image src={defaultSrc} {...rest} onError={handleOnError} />;
}

export default ImageFallback;
