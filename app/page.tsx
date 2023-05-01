'use client'

import { data } from "@/data";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Canvas settings
    const canvas = document.getElementById("canvas-container")! as any;
    const canvasContext = canvas.getContext("2d");
    canvas.width=data.images.width;
    canvas.height=data.images.height;

    // preload images for performances
    const images: any[] = [];
    for (let i = data.images.startIndex; i < data.images.endIndex; i++) {
      images[i] = new Image();
      images[i].src = data.images.getPath(i);
    }

    // Draw first image to canvas when available
    const img = new Image();
    img.src = data.images.getPath(data.images.startIndex);
    img.onload = () => {
      canvasContext.drawImage(img, 0, 0);
    }

    // Scroll interactions
    const html = document.getElementsByTagName('html');
    const onScroll = () => {  
      const scrollTop = html[0].scrollTop;
      const maxScrollTop = html[0].scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScrollTop;

      // Get frame index depending on scroll percent
      const frameIndex = Math.min(
        data.images.endIndex - 1,
        Math.floor(scrollPercent * data.images.endIndex)
      );

      const frameToDraw = images[frameIndex];
      if (undefined === frameToDraw) {
        return;
      }

      // Update canvas with new frame
      requestAnimationFrame(() => {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(images[frameIndex], 0, 0)
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <main className="h-[500vh]">
      <canvas
        id="canvas-container"
        className="fixed max-w-screen max-h-screen left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
      />
    </main>
  )
}
